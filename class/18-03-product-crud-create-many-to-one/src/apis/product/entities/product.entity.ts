import { Int, Field, ObjectType } from '@nestjs/graphql';
import { ProductCategory } from 'src/apis/productCategory/entities/productCategory.entity';
import { ProductSaleslocation } from 'src/apis/productSaleslocation/productSaleselocation.entity';
import { ProductTag } from 'src/apis/productTag/entities/productTag.entity';
import { User } from 'src/apis/user/entities/user.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
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
  description: string;

  @Column()
  @Field(() => Int)
  price: number;

  @Column({ default: false })
  @Field(() => Boolean)
  isSoldout: boolean;

  // @Column({ default: false })
  // @Field(() => Boolean)
  // isDeleted: boolean;
  // 이런 방법도 있다 ~

  // @DeleteDateColumn()
  // deletedAt: Date;

  @JoinColumn()
  @OneToOne(() => ProductSaleslocation)
  @Field(() => ProductSaleslocation)
  productSaleslocation: ProductSaleslocation;

  // @JoinColumn() 생략도 가능함
  @ManyToOne(() => ProductCategory, { cascade: true, onDelete: 'CASCADE' })
  @Field(() => ProductCategory)
  productCategory: ProductCategory;

  @ManyToOne(() => User)
  @Field(() => User)
  user: User;

  @JoinTable() //상품테이블이 메인이라 여기에 조인함
  @ManyToMany(() => ProductTag, (productTags) => productTags.products) //서로 지정 productTag.entity랑 다대다관계임
  @Field(() => [ProductTag])
  productTags: ProductTag[];
  //중간테이블은 자동으로 만들어짐-> 다대다 만들면 됨
}
