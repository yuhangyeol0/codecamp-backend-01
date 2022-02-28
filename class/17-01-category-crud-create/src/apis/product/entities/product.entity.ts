import { ProductCategory } from 'src/apis/productCategory/entities/productCategory.entity';
import { ProductSaleslocation } from 'src/apis/productSaleslocation/productSaleselocation.entity';
import { ProductTag } from 'src/apis/productTag/entities/productTag.entity';
import { User } from 'src/apis/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
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

  @JoinTable() //상품테이블이 메인이라 여기에 조인함
  @ManyToMany(() => ProductTag, (productTags) => productTags.products) //서로 지정 productTag.entity랑 다대다관계임
  productTags: ProductTag[];
  //중간테이블은 자동으로 만들어짐-> 다대다 만들면 됨
}
