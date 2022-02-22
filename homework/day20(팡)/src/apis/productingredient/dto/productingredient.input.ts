import { InputType, OmitType, PickType } from '@nestjs/graphql';
import { ProductIngredient } from '../entities/productingredient.entity';

@InputType()
export class productingredientInput extends OmitType(
  ProductIngredient,
  ['id'],
  InputType,
) {
  // @Field(() => String)
  // address: string;
  // ...
  // => 이런것처럼 모두적어야하지만 , PickType 또는 Omittype으로 대체가능
}
