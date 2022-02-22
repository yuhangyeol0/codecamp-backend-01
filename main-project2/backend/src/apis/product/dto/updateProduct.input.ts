import { PickType, InputType } from '@nestjs/graphql';
import { Product } from '../entities/product.entity';

@InputType()
export class UpdateProductInput extends PickType(
  Product,
  ['name', 'detail'],
  InputType,
) {}
