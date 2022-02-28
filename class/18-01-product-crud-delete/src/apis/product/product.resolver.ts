import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { CreateProductInput } from './dto/createProduct.input';
import { ProductService } from './product.service';
import { Product } from './entities/product.entity';
import { ProductTag } from '../productTag/entities/productTag.entity';
import { updateProductInput } from './dto/updateProduct.input';

@Resolver()
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Query(() => [ProductTag])
  async fetchProduct() {
    await this.productService.findAll();
  }

  @Query(() => ProductTag)
  async fetchProducts(@Args('productId') productId: string) {
    return await this.productService.findOne({ productId });
  }

  @Mutation(() => Product)
  async createProduct(
    @Args('createProductInput') createProductInput: CreateProductInput,
  ) {
    return await this.productService.create({ createProductInput });
  }

  @Mutation(() => Product)
  async updateProduct(
    @Args('productId') productId: string,
    @Args('updateProductInput') updateProductInput: updateProductInput,
  ) {
    await this.productService.checkSoldOut(productId);
    return await this.productService.update({ productId, updateProductInput });
  }

  @Mutation(() => Boolean)
  async deleteProduct(@Args('productId') productId: string) {
    return await this.productService.delete({ productId });
  }
}
