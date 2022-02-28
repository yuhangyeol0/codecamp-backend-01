import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateBoardInput {
  @Field(() => String)
  writer: string;
  @Field(() => String)
  title: string;
  @Field(() => String)
  contents: string;
}
//dto 묶어서 데이터 전송