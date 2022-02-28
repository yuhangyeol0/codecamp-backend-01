import { Field, ObjectType } from '@nestjs/graphql';
import { collectFields } from 'graphql/execution/execute';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity() //mysql이라고 알려주는것
@ObjectType() //graphql에서의 리턴타입을 알려줘야함
export class ProductCategory {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  name: string;
}
