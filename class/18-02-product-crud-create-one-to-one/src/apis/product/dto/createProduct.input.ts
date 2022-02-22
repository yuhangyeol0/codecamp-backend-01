import { Int, Field, InputType } from '@nestjs/graphql';
import { ProductSaleslocationInput } from 'src/apis/productSaleslocation/dto/productSaleslocation.input';

@InputType()
export class CreateProductInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;

  @Field(() => Int)
  price: number;

  // productSaleslocation: ProductSaleslocation
  //이렇게 쓰면 오브젝트 타입이라 인풋이 되지 않음 -> 해당 파일에 dto로 인풋파일 만들어서 선언해줘야함
  @Field(() => ProductSaleslocationInput)
  productSaleslocation: ProductSaleslocationInput;
}
