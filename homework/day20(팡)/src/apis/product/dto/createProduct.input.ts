import { InputType, Field, Int } from '@nestjs/graphql';
import { productingredientInput } from 'src/apis/productingredient/dto/productingredient.input';

@InputType()
export class CreateProductInput {
  @Field(() => String)
  ko_name: string;

  @Field(() => String)
  en_name: string;

  @Field(() => String)
  description: string;

  @Field(() => Int)
  kal: number;

  @Field(() => Int)
  mg: number;

  @Field(() => Int)
  sugar: number;

  @Field(() => Int)
  fat: number;

  @Field(() => Int)
  protein: number;

  @Field(() => Int)
  price: number;

  @Field(() => productingredientInput)
  productIngredient: productingredientInput;

  @Field(() => String)
  productCategoryId: string;

  @Field(() => [String])
  productAllergy: string[];
}
