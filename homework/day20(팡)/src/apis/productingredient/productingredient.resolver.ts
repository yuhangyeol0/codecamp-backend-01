import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { resolveSrv } from 'dns/promises';
import { url } from 'inspector';
import { ProductIngredient } from './entities/productingredient.entity';
import { ProductingredientService } from './productingredient.service';

@Resolver()
export class ProductingredientResolver {
  constructor(
    private readonly productingredientService: ProductingredientService,
  ) {}

  @Mutation(() => ProductIngredient) //어떤 결과타입일지 알려준다 (query,mutation or subscription)
  async CreateIngredient(@Args('url') url: string) {
    return this.productingredientService.create({ url });
  } //Args는 graphql에게 인자 타입을 알려준다
}
