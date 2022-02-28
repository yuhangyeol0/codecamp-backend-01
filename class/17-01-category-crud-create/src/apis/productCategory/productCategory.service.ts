import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductCategory } from './entities/productCategory.entity';

//비즈니스 로직
@Injectable()
export class ProductCategoryService {
  constructor(
    @InjectRepository(ProductCategory) //()안에 써줘야 repository써줄수 잇음
    private readonly productCategoryRepository: Repository<ProductCategory>,
  ) {}
  async create({ name }) {
    //카테고리를 데이터베이스에 저장
    return await this.productCategoryRepository.save({ name });
    //create는 등록만 됐다고 알려주고 save는 등록하고 등록한것도 알려줌->프론트에
    //리턴으로 리졸버에 돌려줘야함
  }
}
