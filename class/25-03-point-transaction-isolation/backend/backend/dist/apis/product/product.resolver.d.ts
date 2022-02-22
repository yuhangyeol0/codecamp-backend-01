import { CreateProductInput } from './dto/createProduct.input';
import { ProductService } from './product.service';
import { Product } from './entities/product.entity';
import { updateProductInput } from './dto/updateProduct.input';
export declare class ProductResolver {
    private readonly productService;
    constructor(productService: ProductService);
    fetchProducts(): Promise<Product[]>;
    fetchProduct(productId: string): Promise<Product>;
    createProduct(createProductInput: CreateProductInput): Promise<{
        productSaleslocation: {
            address: string;
            addressDetail: string;
            lat: number;
            lng: number;
            meetingTime: Date;
        } & import("../productSaleslocation/entity/productSaleselocation.entity").ProductSaleslocation;
        productCategory: import("../productCategory/entities/productCategory.entity").ProductCategory;
        productTags: any[];
        name: string;
        description: string;
        price: number;
    } & Product>;
    updateProduct(productId: string, updateProductInput: updateProductInput): Promise<{
        name: string;
        description: string;
        price: number;
        id: string;
        isSoldout: boolean;
        productSaleslocation: import("../productSaleslocation/entity/productSaleselocation.entity").ProductSaleslocation;
        productCategory: import("../productCategory/entities/productCategory.entity").ProductCategory;
        user: import("../user/entities/user.entity").User;
        productTags: import("../productTag/entities/productTag.entity").ProductTag[];
    } & Product>;
    deleteProduct(productId: string): Promise<boolean>;
}
