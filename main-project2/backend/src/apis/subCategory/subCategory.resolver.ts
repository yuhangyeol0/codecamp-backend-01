import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { SubCategory } from './entities/subCategory.entity';
import { SubCategoryService } from './subCategory.service';

@Resolver()
export class SubCategoryResolver {
  constructor(private readonly subCategoryService: SubCategoryService) {}
  @Mutation(() => SubCategory)
  async createSubCategory(@Args('name') name: string) {
    return await this.subCategoryService.create({ name });
  }
}
