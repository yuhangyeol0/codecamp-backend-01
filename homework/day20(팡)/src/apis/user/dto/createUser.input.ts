import { InputType, Field, Int } from '@nestjs/graphql';
import { productingredientInput } from 'src/apis/productingredient/dto/productingredient.input';

@InputType()
export class CreateUserInput {
  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  phonenumber: string;
}
