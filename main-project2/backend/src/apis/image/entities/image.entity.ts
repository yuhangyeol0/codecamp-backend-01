import { PrimaryGeneratedColumn, Column, Entity, ManyToOne } from 'typeorm';
import { Product } from 'src/apis/product/entities/product.entity';
import { Field, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Image {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  URL: string;

  @Column()
  @Field(() => Boolean)
  isImage: boolean;

  @ManyToOne(() => Product)
  @Field(() => Product)
  product: Product;
}
