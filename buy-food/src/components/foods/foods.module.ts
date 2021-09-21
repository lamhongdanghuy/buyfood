import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodsResolver } from './foods.resolver';
import { FoodsService } from './foods.service';
import { Food } from './entities/food';

@Module({
  imports: [TypeOrmModule.forFeature([Food])],
  providers: [FoodsService, FoodsResolver],
  exports: [FoodsService],
})
export class FoodsModule {}
