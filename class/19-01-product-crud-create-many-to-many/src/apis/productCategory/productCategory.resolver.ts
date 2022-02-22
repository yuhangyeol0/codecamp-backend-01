import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { ProductCategory } from './entities/productCategory.entity';
import { ProductCategoryService } from './productCategory.service';

@Resolver()
export class ProductCategoryResolver {
  constructor(
    private readonly productCategoryService: ProductCategoryService,
  ) {}
  @Mutation(() => ProductCategory)
  async createProductCategory(
    @Args('name') name: string, //
  ) {
    return await this.productCategoryService.create({ name });
  }

  @Mutation(() => Boolean)
  async deleteProductCategory(
    @Args('productCategoryId') productCategoryId: string,
  ) {
    return await this.productCategoryService.delete({ productCategoryId });
  }
}
