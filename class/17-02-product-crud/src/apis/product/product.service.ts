import {
  HttpException,
  HttpStatus,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductInput } from './dto/createProduct.input';
import { updateProductInput } from './dto/updateProduct.input';
import { Product } from './entities/product.entity';

interface ICreate {
  createProductInput: CreateProductInput;
}

interface IFindOne {
  productId: string;
}

interface IUpdate {
  productId: string;
  updateProductInput: updateProductInput;
}
//타입스크립트는 반드시 필요한건 아님 근데 요즘 많이쓰니까 쓰기

//비즈니스 로직
@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async findAll() {
    return await this.productRepository.find();
  }
  //{productId}:{productId:string}
  async findOne({ productId }: IFindOne) {
    return await this.productRepository.findOne({ id: productId });
  }

  async create({ createProductInput }: ICreate) {
    try {
      return await this.productRepository.save({
        ...createProductInput, //스프레드 연산자로 줄여서 쓸 수 잇음

        //나열해서 쓰는 버전
        // name: createProductInput.name,
        // description: createProductInput.description,
        // price: createProductInput.price,
      }); //에러발생시 즉시 중단하고 캐치로 내려감
    } catch (error) {
      console.log(error);
      throw error; //throw쓰면 프론트로 던져주는것임
    }
  }
  async update({ productId, updateProductInput }: IUpdate) {
    const product = await this.productRepository.findOne({ id: productId });
    const newProduct = {
      ...product,
      ...updateProductInput,
      // name: updateProductInput.name,
      // description: updateProductInput.description,
      // price: updateProductInput.price,
    };

    return await this.productRepository.save(newProduct);
    //save는 수정도 되고 등록도 됨, 업데이트 내용을 프론트에 반환하려면 save로 update역할을 시킴
  }

  async checkSoldOut(productId) {
    const product = await this.productRepository.findOne({ id: productId });
    if (product.isSoldout)
      throw new UnprocessableEntityException('판매완료된 상품입니다.');
    // throw new HttpException(
    //   '이미 판매완료된 상품입니다.',
    //   HttpStatus.UNPROCESSABLE_ENTITY,
    // );
  }
}
