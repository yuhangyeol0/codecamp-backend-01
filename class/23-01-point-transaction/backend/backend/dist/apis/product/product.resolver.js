"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const createProduct_input_1 = require("./dto/createProduct.input");
const product_service_1 = require("./product.service");
const product_entity_1 = require("./entities/product.entity");
const updateProduct_input_1 = require("./dto/updateProduct.input");
let ProductResolver = class ProductResolver {
    constructor(productService) {
        this.productService = productService;
    }
    async fetchProducts() {
        return await this.productService.findAll();
    }
    async fetchProduct(productId) {
        return await this.productService.findOne({ productId });
    }
    async createProduct(createProductInput) {
        return await this.productService.create({ createProductInput });
    }
    async updateProduct(productId, updateProductInput) {
        await this.productService.checkSoldOut(productId);
        return await this.productService.update({ productId, updateProductInput });
    }
    async deleteProduct(productId) {
        return await this.productService.delete({ productId });
    }
};
__decorate([
    (0, graphql_1.Query)(() => [product_entity_1.Product]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "fetchProducts", null);
__decorate([
    (0, graphql_1.Query)(() => product_entity_1.Product),
    __param(0, (0, graphql_1.Args)('productId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "fetchProduct", null);
__decorate([
    (0, graphql_1.Mutation)(() => product_entity_1.Product),
    __param(0, (0, graphql_1.Args)('createProductInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createProduct_input_1.CreateProductInput]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "createProduct", null);
__decorate([
    (0, graphql_1.Mutation)(() => product_entity_1.Product),
    __param(0, (0, graphql_1.Args)('productId')),
    __param(1, (0, graphql_1.Args)('updateProductInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, updateProduct_input_1.updateProductInput]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "updateProduct", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean),
    __param(0, (0, graphql_1.Args)('productId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "deleteProduct", null);
ProductResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductResolver);
exports.ProductResolver = ProductResolver;
//# sourceMappingURL=product.resolver.js.map