import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductCategory } from './entities/productCategory.entity';

@Injectable()
export class ProductCategoryService {
  constructor(
    @InjectRepository(ProductCategory)
    private readonly productCategoryRepository: Repository<ProductCategory>, // table과 비지니스로직을 연결 즉 데이터와 비지니스 로직을 연결시킴
  ) {}

  async create({ name }) {
    return await this.productCategoryRepository.save({ name });
  }
  async delete({ productCategoryId }) {
    const result = await this.productCategoryRepository.delete({
      id: productCategoryId,
    });
    return result.affected ? true : false;
  }
}
