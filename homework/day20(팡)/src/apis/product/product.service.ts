import { CreateProductInput } from './dto/createProduct.input';
import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateProductInput } from './dto/updateProduct.input';
import { ProductIngredient } from '../productingredient/entities/productingredient.entity';
import { ProductCategory } from '../productCategory/entities/productCategory.entity';
import { ProductAllergy } from '../productallergy/entities/productallergy.entity';

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

    @InjectRepository(ProductCategory)
    private readonly productCategoryRepository: Repository<ProductCategory>,

    @InjectRepository(ProductAllergy)
    private readonly productAllergyRepository: Repository<ProductAllergy>,

    @InjectRepository(ProductIngredient)
    private readonly productIngredientRepository: Repository<ProductIngredient>,
  ) {}

  async create({ createProductInput }: ICreate) {
    // dto에서 지정한 inputType인 CreateProductInput을 createProductInput 이라는 변수안에 담아주었다. 이떄 사용한것이 interface기능!
    const { productIngredient, productCategoryId, productAllergy, ...product } =
      createProductInput;

    const result1 = await this.productIngredientRepository.save({
      ...productIngredient,
    });

    const result2 = await this.productCategoryRepository.save({
      id: productCategoryId,
    });

    const result3 = [];
    for (let i = 0; i < productAllergy.length; i++) {
      const allergyname = productAllergy[i].replace('#', '');

      const prevallergy = await this.productAllergyRepository.findOne({
        name: allergyname,
      });
      if (prevallergy) {
        result3.push(prevallergy);
      } else {
        const newAllergy = await this.productAllergyRepository.save({
          name: allergyname,
        });
        result3.push(newAllergy);
      }
    }

    const result4 = await this.productRepository.save({
      ...product,
      productIngredient: result1,
      productCategory: result2,
      productAllergies: result3,
    });

    return result4;

    // const product = await this.productRepository.save({
    //   ...createProductInput,
    // });
    // return product;
  }

  async findAll() {
    const products = await this.productRepository.find({
      withDeleted: true,
      relations: ['productIngredient', 'productCategory'],
    });
    return products;
  }

  async findOne({ productId }) {
    const product = await this.productRepository.findOne({
      where: { id: productId },
      relations: ['productIngredient', 'productCategory'],
    });
    return product;
  }

  async update({ productId, updateProductInput }: IUpdate) {
    const product = await this.productRepository.findOne({ id: productId });
    const newProduct = { ...product, ...updateProductInput };
    const updatedProduct = await this.productRepository.save(newProduct);
    return updatedProduct;
  }
  async checkout({ productId }) {
    const checkproduct = await this.productRepository.findOne({
      id: productId,
    });
    if (!checkproduct) throw new UnprocessableEntityException();
  }
  async delete({ productId }: IDelete) {
    const result = await this.productRepository.softDelete({ id: productId }); // 모든조건 삭제 가능
    return result.affected ? true : false;
  }

  async restore({ productId }) {
    const result = await this.productRepository.restore({ id: productId }); // 모든조건 삭제 가능
    return result.affected ? true : false;
  }
}
