import {
  HttpException,
  HttpStatus,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductCategory } from '../productCategory/entities/productCategory.entity';
import { CreateProductInput } from './dto/createProduct.input';
import { updateProductInput } from './dto/updateProduct.input';
import { Product } from './entities/product.entity';
import { ProductSaleslocation } from '../productSaleslocation/entity/productSaleselocation.entity';
import { ProductTag } from '../productTag/entities/productTag.entity';

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

interface IDelete {
  productId: string;
}
//타입스크립트는 반드시 필요한건 아님 근데 요즘 많이쓰니까 쓰기

//비즈니스 로직
@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,

    @InjectRepository(ProductSaleslocation)
    private readonly productSaleslocationRepository: Repository<ProductSaleslocation>,

    @InjectRepository(ProductCategory)
    private readonly productCategoryRepository: Repository<ProductCategory>,

    @InjectRepository(ProductTag)
    private readonly productTagRepository: Repository<ProductTag>,
  ) {}

  async findAll() {
    return await this.productRepository.find({
      relations: ['productSaleslocation', 'productCategory'],
    });
  }
  //{productId}:{productId:string}
  async findOne({ productId }: IFindOne) {
    return await this.productRepository.findOne({
      where: { id: productId },
      relations: ['productSaleslocation', 'productCategory', 'productTags'],
    });
  }

  async create({ createProductInput }: ICreate) {
    //1, 상품만 등록하는 경우
    // return await this.productRepository.save({
    //   ...createProductInput, //스프레드 연산자로 줄여서 쓸 수 잇음
    //   //나열해서 쓰는 버전
    //   // name: createProductInput.name,
    //   // description: createProductInput.description,
    //   // price: createProductInput.price,
    // });
    //2. 상품과 상품거래위치 테이블을 연결하여 등록하기
    //2-1. 하나하나 분해하기
    console.log(createProductInput);
    // const product = {
    //   name: createProductInput.name,
    //   description: createProductInput.description,
    //   price: createProductInput.price,
    // };
    // const productSaleselocation = createProductInput.productSaleslocation;
    // 원짱은 천재야
    // 2-2. 한번에 분해하기
    const { productSaleslocation, productCategoryId, productTags, ...product } =
      createProductInput;

    const result1 = await this.productSaleslocationRepository.save({
      ...productSaleslocation,
    });

    const result2 = await this.productCategoryRepository.findOne({
      id: productCategoryId,
    });

    productTags; // ["#전자제품", "#영등포", "#컴퓨터"]
    ('#전자제품');
    const result3 = [];
    // 추후 for문을 map과 Promise.all로 최적화 할 것
    for (let i = 0; i < productTags.length; i++) {
      const tagname = productTags[0].replace('#', '');
      const prevTag = await this.productTagRepository.findOne({
        name: tagname,
      });

      // 기존의 태그가 존재한다면
      if (prevTag) {
        result3.push(prevTag);
      }
      // 기존에 태그가 없었다면
      else {
        const newTag = await this.productTagRepository.save({
          name: tagname,
        });
        result3.push(newTag);
      }
    }

    // 방금 등록한  productTag포함시켜서 product 등록!!
    return await this.productRepository.save({
      ...product,
      productSaleslocation: result1,
      productCategory: result2,
      productTags: result3,
    });
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

  async delete({ productId }: IDelete) {
    //1. 진짜 삭제
    const result = await this.productRepository.delete({ id: productId });
    return result.affected ? true : false; //삭제가 됐는지 안됐는지 알려줌
    //
    //2. 소프트 삭제 -1 (직접구현)
    // await this.productRepository.update({ id: productId }, { idDeleted: true });
    //
    //3. 소프트 삭제 -2 (직접구현)
    // await this.productRepository.update({ id: productId }, { deletedAt: new Date() });
    //
    //4. 소프트 삭제 (typeorm 제공) -1
    // await this.productRepository.softRemove({ id: productId }); //id로만 삭제 가능
    //
    //5. 소프트 삭제( typeorm 제공) -2
    // const result = await this.productRepository.softDelete({ id: productId }); // 다양한 조건으로 삭제 가능
    // return result.affected ? true : false;
  }
}
