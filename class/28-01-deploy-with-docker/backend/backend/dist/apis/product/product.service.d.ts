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
export declare class ProductService {
    private readonly productRepository;
    private readonly productSaleslocationRepository;
    private readonly productCategoryRepository;
    private readonly productTagRepository;
    constructor(productRepository: Repository<Product>, productSaleslocationRepository: Repository<ProductSaleslocation>, productCategoryRepository: Repository<ProductCategory>, productTagRepository: Repository<ProductTag>);
    findAll(): Promise<Product[]>;
    findOne({ productId }: IFindOne): Promise<Product>;
    create({ createProductInput }: ICreate): Promise<{
        productSaleslocation: {
            address: string;
            addressDetail: string;
            lat: number;
            lng: number;
            meetingTime: Date;
        } & ProductSaleslocation;
        productCategory: ProductCategory;
        productTags: any[];
        name: string;
        description: string;
        price: number;
    } & Product>;
    update({ productId, updateProductInput }: IUpdate): Promise<{
        name: string;
        description: string;
        price: number;
        id: string;
        isSoldout: boolean;
        productSaleslocation: ProductSaleslocation;
        productCategory: ProductCategory;
        user: import("../user/entities/user.entity").User;
        productTags: ProductTag[];
    } & Product>;
    checkSoldOut(productId: any): Promise<void>;
    delete({ productId }: IDelete): Promise<boolean>;
}
export {};
