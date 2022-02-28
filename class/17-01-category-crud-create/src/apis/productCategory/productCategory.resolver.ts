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
    //리턴으로 프론트에 돌려줘야함
  }
}
