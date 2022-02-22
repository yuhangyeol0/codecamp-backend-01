import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { resolveSrv } from 'dns/promises';
import { ProductCategoryService } from './productCategory.service';
import { ProductCategory } from './entities/productCategory.entity';

@Resolver()
export class ProductCategoryResolver {
  constructor(
    private readonly productCategoryService: ProductCategoryService,
  ) {}

  @Mutation(() => ProductCategory) //어떤 결과타입일지 알려준다 (query,mutation or subscription)
  async CreateProductCategory(@Args('name') name: string) {
    return this.productCategoryService.create({ name });
  } //Args는 graphql에게 인자 타입을 알려준다

  @Mutation(() => Boolean)
  async deleteProductCategory(
    @Args('productCategoryId') productCategoryId: string,
  ) {
    return await this.productCategoryService.delete({ productCategoryId });
  }
}
