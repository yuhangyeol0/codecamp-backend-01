import { ProductSaleslocationInput } from 'src/apis/productSaleslocation/dto/productSaleslocation.input';
export declare class CreateProductInput {
    name: string;
    description: string;
    price: number;
    productSaleslocation: ProductSaleslocationInput;
    productCategoryId: string;
    productTags: string[];
}
