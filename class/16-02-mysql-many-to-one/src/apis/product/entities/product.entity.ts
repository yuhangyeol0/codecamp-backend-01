import { ProductCategory } from 'src/apis/productCategory/productCategory.entity';
import { ProductSaleslocation } from 'src/apis/productSaleslocation/productSaleselocation.entity';
import { User } from 'src/apis/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  desciption: string;

  @Column()
  price: number;

  @Column()
  isSoldout: boolean;

  @JoinColumn()
  @OneToOne(() => ProductSaleslocation)
  productSaleslocation: ProductSaleslocation;

  // @JoinColumn() 생략도 가능함
  @ManyToOne(() => ProductCategory)
  productCategory: ProductCategory;

  @ManyToOne(() => User)
  user: User;
}
