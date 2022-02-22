"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const productCategory_entity_1 = require("../productCategory/entities/productCategory.entity");
const productSaleselocation_entity_1 = require("../productSaleslocation/entity/productSaleselocation.entity");
const productTag_entity_1 = require("../productTag/entities/productTag.entity");
const product_entity_1 = require("./entities/product.entity");
const product_resolver_1 = require("./product.resolver");
const product_service_1 = require("./product.service");
let ProductModule = class ProductModule {
};
ProductModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                product_entity_1.Product,
                productSaleselocation_entity_1.ProductSaleslocation,
                productCategory_entity_1.ProductCategory,
                productTag_entity_1.ProductTag,
            ]),
        ],
        providers: [
            product_resolver_1.ProductResolver,
            product_service_1.ProductService,
        ],
    })
], ProductModule);
exports.ProductModule = ProductModule;
//# sourceMappingURL=product.module.js.map