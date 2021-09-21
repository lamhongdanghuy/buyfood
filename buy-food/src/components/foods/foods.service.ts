import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewFoodInput } from './dto/new-food.input';
import { Food } from './entities/food';

@Injectable()
export class FoodsService {
  constructor(@InjectRepository(Food) private foodRepository: Repository<Food>) {}

  public async getAllFoods(): Promise<Food[]> {
    return await this.foodRepository.find({}).catch((err) => {
      throw new InternalServerErrorException();
    });
  }

  public async addFood(newFoodData: NewFoodInput): Promise<Food> {
    const newFood = this.foodRepository.create(newFoodData);
    await this.foodRepository.save(newFood).catch((err) => {
      new InternalServerErrorException();
    });

    return newFood;
  }
}
