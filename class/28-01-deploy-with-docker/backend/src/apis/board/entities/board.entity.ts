import { Int, Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Board {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  number: number;
  @Column()
  @Field(() => String)
  writer: string;
  @Column()
  @Field(() => String)
  title: string;
  @Column()
  @Field(() => String)
  contents: string;
}
