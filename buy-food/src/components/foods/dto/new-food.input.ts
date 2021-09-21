import { Field, InputType, Int } from '@nestjs/graphql';
import { Max, Min } from 'class-validator';

@InputType()
export class NewFoodInput {
  @Field()
  name: string;

  @Field((type) => Int)
  @Max(30)
  @Min(2)
  Price: number;

  @Field()
  ingredients: string;

  @Field()
  thumbnailUrl: string;
}
