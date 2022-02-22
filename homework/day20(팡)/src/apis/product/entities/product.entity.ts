import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ProductAllergy } from 'src/apis/productallergy/entities/productallergy.entity';
import { ProductCategory } from 'src/apis/productCategory/entities/productCategory.entity';
import { ProductIngredient } from 'src/apis/productingredient/entities/productingredient.entity';

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
import { JoinAttribute } from 'typeorm/query-builder/JoinAttribute';

@Entity()
@ObjectType()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  ko_name: string;

  @Column()
  @Field(() => String)
  en_name: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  description?: string;

  @Column({ nullable: true })
  @Field(() => Int, { nullable: true })
  kal?: number;

  @Column({ nullable: true })
  @Field(() => Int, { nullable: true })
  mg?: number;

  @Column({ nullable: true })
  @Field(() => Int, { nullable: true })
  sugar?: number;

  @Column({ nullable: true })
  @Field(() => Int, { nullable: true })
  fat?: number;

  @Column({ nullable: true })
  @Field(() => Int, { nullable: true })
  protein?: number;

  @Column({ nullable: false })
  @Field(() => Int, { nullable: false })
  price: number;

  @DeleteDateColumn()
  deletdAt: Date;

  @JoinColumn()
  @OneToOne(() => ProductIngredient)
  @Field(() => ProductIngredient)
  productIngredient: ProductIngredient;

  @ManyToOne(() => ProductCategory, { onDelete: 'CASCADE' }) //ManyToOne 에선 조인 생략가능
  @Field(() => ProductCategory)
  productCategory: ProductCategory;

  @JoinTable()
  @ManyToMany(
    () => ProductAllergy,
    (productAllergies) => productAllergies.products,
  )
  @Field(() => [ProductAllergy])
  productAllergies: ProductAllergy[];
}
