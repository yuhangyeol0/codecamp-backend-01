import { Product } from 'src/apis/product/entities/product.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductTag {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToMany(() => Product, (products) => products.productTags) //서로 지정 product.entity랑 다대다관계임
  products: ProductTag[];
}
