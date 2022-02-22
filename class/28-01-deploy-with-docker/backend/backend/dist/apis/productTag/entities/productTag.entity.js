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
var ProductTag_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductTag = void 0;
const graphql_1 = require("@nestjs/graphql");
const product_entity_1 = require("../../product/entities/product.entity");
const typeorm_1 = require("typeorm");
let ProductTag = ProductTag_1 = class ProductTag {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ProductTag.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ProductTag.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => product_entity_1.Product, (products) => products.productTags),
    (0, graphql_1.Field)(() => [ProductTag_1]),
    __metadata("design:type", Array)
], ProductTag.prototype, "products", void 0);
ProductTag = ProductTag_1 = __decorate([
    (0, typeorm_1.Entity)(),
    (0, graphql_1.ObjectType)()
], ProductTag);
exports.ProductTag = ProductTag;
//# sourceMappingURL=productTag.entity.js.map