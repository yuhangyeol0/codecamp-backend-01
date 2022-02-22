import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSubCategoryInput } from './dto/createSubCategory.input';
import { SubCategory } from './entities/subCategory.entity';

interface ISubCategory {
  subCategoryId: string;
}

@Injectable()
export class SubCategoryService {
  constructor(
    @InjectRepository(SubCategory)
    private readonly subCategoryRepository: Repository<SubCategory>,
  ) {}

  async create({ name }) {
    return await this.subCategoryRepository.save({ name });
  }
}
