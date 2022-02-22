import { PickType, InputType } from '@nestjs/graphql';
import { Product } from '../entities/product.entity';

@InputType()
export class UpdateProductInput extends PickType(
  Product,
  [
    'ko_name',
    'en_name',
    'description',
    'kal',
    'mg',
    'sugar',
    'fat',
    'protein',
    'price',
  ],
  InputType,
) {}
