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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const productSaleslocation_input_1 = require("../../productSaleslocation/dto/productSaleslocation.input");
let CreateProductInput = class CreateProductInput {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreateProductInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreateProductInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], CreateProductInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => productSaleslocation_input_1.ProductSaleslocationInput),
    __metadata("design:type", productSaleslocation_input_1.ProductSaleslocationInput)
], CreateProductInput.prototype, "productSaleslocation", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreateProductInput.prototype, "productCategoryId", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], CreateProductInput.prototype, "productTags", void 0);
CreateProductInput = __decorate([
    (0, graphql_1.InputType)()
], CreateProductInput);
exports.CreateProductInput = CreateProductInput;
//# sourceMappingURL=createProduct.input.js.map