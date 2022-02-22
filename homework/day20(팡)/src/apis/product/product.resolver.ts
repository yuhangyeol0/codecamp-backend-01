import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { Product } from './entities/product.entity';
import { CreateProductInput } from './dto/createProduct.input';
import { UpdateProductInput } from './dto/updateProduct.input';
import {
  HttpException,
  HttpStatus,
  UnprocessableEntityException,
} from '@nestjs/common';

@Resolver()
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Query(() => [Product])
  fetchProducts() {
    return this.productService.findAll();
  }

  @Query(() => Product)
  fetchProduct(@Args(`productId`) productId: string) {
    return this.productService.findOne({ productId });
  }

  @Mutation(() => Product)
  createProduct(
    @Args('createProductInput') createProductInput: CreateProductInput,
  ) {
    const product = this.productService.create({ createProductInput });
    //console.log(createProductInput);
    //console.log('==========');
    // console.log(product);
    return product;
  }

  @Mutation(() => Product)
  async updateProduct(
    @Args(`productId`) productId: string,
    @Args(`updateProductInput`) updateProductInput: UpdateProductInput,
  ) {
    await this.productService.checkout({ productId });

    return this.productService.update({ productId, updateProductInput });
  }

  @Mutation(() => Boolean)
  deleteProduct(@Args('productId') productId: string) {
    return this.productService.delete({ productId });
  }
  @Mutation(() => Boolean)
  restoreProduct(@Args('productId') productId: string) {
    return this.productService.restore({ productId });
  }
}
