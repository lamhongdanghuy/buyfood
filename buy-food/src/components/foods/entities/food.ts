import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'foods' })
@ObjectType()
export class Food {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  Price: number;

  @Column()
  @Field()
  ingredients: string;

  @Column()
  @Field()
  thumbnailUrl: string;
}
