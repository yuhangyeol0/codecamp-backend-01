import { CreateProductInput } from './dto/createProduct.input';
import { BadRequestException, Injectable } from '@nestjs/common';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateProductInput } from './dto/updateProduct.input';
import { SubCategory } from '../subCategory/entities/subCategory.entity';
import { Allergy } from '../allergy/entities/allergy.entity';

interface ICreate {
  createProductInput: CreateProductInput;
}

interface IUpdate {
  productId: string;
  updateProductInput: UpdateProductInput;
}

interface IDelete {
  productId: string;
}

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,

    @InjectRepository(SubCategory)
    private readonly subCategoryRepository: Repository<SubCategory>,

    @InjectRepository(Allergy)
    private readonly allergyRepository: Repository<Allergy>,
  ) {}

  async create({ createProductInput }: ICreate) {
    // dto에서 지정한 inputType인 CreateProductInput을 createProductInput 이라는 변수안에 담아주었다. 이떄 사용한것이 interface기능!
    // try {
    //   const product = await this.productRepository.save({
    //     ...createProductInput,
    //     //spread연산자를 사용하면
    //     //name:~~
    //     //description:~~
    //     //price:~~
    //     //이처럼 하나씩 불러오는것과 같은 효과를 발휘한다.
    //   });
    //   return product;
    // } catch (error) {
    //   throw error;
    // }
    const { subCategoryId, allergies, ...product } = createProductInput;

    //3. 상품카테고리 읽어오기
    const result1 = await this.subCategoryRepository.findOne({
      id: subCategoryId,
    });

    const result2 = [];
    if (allergies.length) {
      for (let i = 0; i < allergies.length; i++) {
        const allergyName = allergies[i].replace('#', '');
        const preAllergy = await this.allergyRepository.findOne(
          { name: allergyName },
          { relations: ['products'] },
        );
        if (preAllergy) {
          result2.push(preAllergy);
        } else {
          const newAllergy = await this.allergyRepository.save({
            name: allergyName,
          });
          result2.push(newAllergy);
        }
      }
    }

    if (!result1) throw new BadRequestException('카테고리 에러!');
    const result3 = await this.productRepository.save({
      ...product,
      subCategory: result1,
      allergies: result2,
    });
    return result3;
  }

  async findAll() {
    const products = await this.productRepository.find({
      withDeleted: true,
      relations: ['subCategory', 'allergies'],
    });
    return products;
  }

  async findOne({ productId }) {
    const product = await this.productRepository.findOne({
      where: { id: productId },
      relations: ['subCategory', 'allergies'],
    });
    return product;
  }

  async update({ productId, updateProductInput }: IUpdate) {
    const product = await this.productRepository.findOne({ id: productId });
    const newProduct = { ...product, ...updateProductInput };
    const updatedProduct = await this.productRepository.save(newProduct);
    return updatedProduct;
  }

  async delete({ productId }: IDelete) {
    const result = await this.productRepository.softDelete({ id: productId });
    return result.affected ? true : false;
  }

  async restore({ productId }) {
    const result = await this.productRepository.restore({ id: productId });
    return result.affected ? true : false;
  }
}
