import { Field, ObjectType, Int } from '@nestjs/graphql';
import {
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column({ nullable: true })
  @Field(() => String)
  email: string;

  @Column({ nullable: true })
  // @Field(() => String) 비밀번호 유출금지를 위해 필드를 주석해둠ㄴ
  password: string;

  @Column({ nullable: true })
  @Field(() => String)
  name: string;

  @DeleteDateColumn()
  deletedAt?: Date;

  @Column({ nullable: true })
  @Field(() => Int)
  age: number;

  @Column({ default: 0 })
  @Field(() => Int)
  point: number;
}
