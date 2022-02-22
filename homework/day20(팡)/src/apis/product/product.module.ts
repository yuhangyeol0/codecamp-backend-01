import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ProductService } from './product.service';
import { ProductResolver } from './product.resolver';
import { ProductIngredient } from '../productingredient/entities/productingredient.entity';
import { ProductCategory } from '../productCategory/entities/productCategory.entity';
import { ProductAllergy } from '../productallergy/entities/productallergy.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Product,
      ProductIngredient,
      ProductCategory,
      ProductAllergy,
    ]),
  ],
  providers: [ProductService, ProductResolver],
})
export class ProductModule {}
