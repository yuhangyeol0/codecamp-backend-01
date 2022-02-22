import { ProductCategory } from './entities/productCategory.entity';
import { ProductCategoryService } from './productCategory.service';
export declare class ProductCategoryResolver {
    private readonly productCategoryService;
    constructor(productCategoryService: ProductCategoryService);
    createProductCategory(name: string): Promise<{
        name: any;
    } & ProductCategory>;
    deleteProductCategory(productCategoryId: string): Promise<import("typeorm").DeleteResult>;
}
