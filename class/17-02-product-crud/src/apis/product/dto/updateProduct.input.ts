import { Int, Field, InputType } from '@nestjs/graphql';

@InputType()
export class updateProductInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;

  @Field(() => Int)
  price: number;
}
