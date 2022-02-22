import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductIngredient } from './entities/productingredient.entity';

@Injectable()
export class ProductingredientService {
  constructor(
    @InjectRepository(ProductIngredient)
    private readonly productIngredientRepository: Repository<ProductIngredient>, // table과 비지니스로직을 연결 즉 데이터와 비지니스 로직을 연결시킴
  ) {}

  async create({ url }) {
    return await this.productIngredientRepository.save({ url });
  }
}
