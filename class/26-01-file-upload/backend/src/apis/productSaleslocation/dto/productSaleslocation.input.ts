import { InputType, OmitType, PickType } from '@nestjs/graphql';
import { ProductSaleslocation } from '../entity/productSaleselocation.entity';

//pickType : 타입을 그대로 가져와서 원하는 것들만 pick하는것
//OmitType : 안쓰고싶은것들만 빼는것
@InputType()
export class ProductSaleslocationInput extends OmitType(
  ProductSaleslocation,
  ['id'],
  InputType,
) {
  //타입을 재사용하게 함
}
