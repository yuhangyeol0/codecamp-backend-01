import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Allergy } from 'src/apis/allergy/entities/allergy.entity';
import { Image } from 'src/apis/image/entities/image.entity';
import { Payment } from 'src/apis/payment/entities/payment.entity';

import { SubCategory } from 'src/apis/subCategory/entities/subCategory.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  name: string;

  @Column()
  @Field(() => String)
  detail: string;

  @DeleteDateColumn()
  deletedAt?: Date;

  @JoinColumn()
  @ManyToOne(() => SubCategory, { onDelete: 'CASCADE' })
  @Field(() => SubCategory)
  subCategory: SubCategory;

  @JoinTable()
  @Field(() => [Allergy])
  @ManyToMany(() => Allergy, (allergies) => allergies.products)
  allergies: Allergy[];

  @Column()
  @Field(() => Int)
  price: number;

  @Column()
  @Field(() => Int)
  size: string;

  @Column()
  @Field(() => Int)
  amount: number;

  @Column()
  @Field(() => Int)
  kcal: number;

  @Column()
  @Field(() => Int)
  protein: number;

  @Column()
  @Field(() => Int)
  fat: number;

  @Column()
  @Field(() => Int)
  caffein: number;

  @JoinColumn()
  @ManyToOne(() => Payment)
  @Field(() => Payment)
  payments: Payment;
}
