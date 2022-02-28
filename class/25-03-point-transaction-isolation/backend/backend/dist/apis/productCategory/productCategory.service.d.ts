import { Repository } from 'typeorm';
import { ProductCategory } from './entities/productCategory.entity';
export declare class ProductCategoryService {
    private readonly productCategoryRepository;
    constructor(productCategoryRepository: Repository<ProductCategory>);
    create({ name }: {
        name: any;
    }): Promise<{
        name: any;
    } & ProductCategory>;
    delete({ productCategoryId }: {
        productCategoryId: any;
    }): Promise<import("typeorm").DeleteResult>;
}
