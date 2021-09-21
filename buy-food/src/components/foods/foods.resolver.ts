import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { FoodsService } from './foods.service';
import { NewFoodInput } from './dto/new-food.input';
import { Food } from './entities/food';

@Resolver()
export class FoodsResolver {
  constructor(private foodsService: FoodsService) {}

  @Query((returns) => [Food])
  public async foods(): Promise<Food[]> {
    return await this.foodsService.getAllFoods().catch((err) => {
      throw err;
    });
  }

  @Mutation((returns) => Food)
  public async addNewFood(
    @Args('newFoodData') newFoodData: NewFoodInput,
  ): Promise<Food> {
    return await this.foodsService.addFood(newFoodData).catch((err) => {
      throw err;
    });
  }
}
