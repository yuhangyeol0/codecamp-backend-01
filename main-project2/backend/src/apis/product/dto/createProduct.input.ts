import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  detail?: string;

  @Field(() => Int)
  price: number;

  @Field(() => String)
  subCategoryId: string;

  @Field(() => [String])
  allergies: string[];
}
