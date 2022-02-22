import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ProductService } from './product.service';
import { ProductResolver } from './product.resolver';
import { SubCategory } from '../subCategory/entities/subCategory.entity';
import { Allergy } from '../allergy/entities/allergy.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, SubCategory, Allergy])],
  providers: [ProductService, ProductResolver],
})
export class ProductModule {}
