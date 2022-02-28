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
exports.AuthResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const user_service_1 = require("../user/user.service");
const bcrypt = require("bcrypt");
const auth_service_1 = require("./auth.service");
const gql_user_param_1 = require("../../common/auth/gql-user.param");
const gql_auth_guard_1 = require("../../common/auth/gql-auth.guard");
let AuthResolver = class AuthResolver {
    constructor(userService, authService) {
        this.userService = userService;
        this.authService = authService;
    }
    async login(email, password, context) {
        const user = await this.userService.findOne({ email });
        if (!user)
            throw new common_1.UnprocessableEntityException('이메일이 존재하지 않습니다.');
        const isAuthenticated = await bcrypt.compare(password, user.password);
        if (!isAuthenticated)
            throw new common_1.UnauthorizedException('비밀번호가 틀렸습니다.');
        console.log('req', context.req);
        console.log('res', context.res);
        this.authService.setRefreshToken({ user, res: context.res });
        return this.authService.getAccessToken({ user });
    }
    restoreAccessToken(currentUser) {
        this.authService.getAccessToken({ user: currentUser });
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => String),
    __param(0, (0, graphql_1.Args)('email')),
    __param(1, (0, graphql_1.Args)('password')),
    __param(2, (0, graphql_1.Context)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "login", null);
__decorate([
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthRefreshsGuard),
    (0, graphql_1.Mutation)(() => String),
    __param(0, (0, gql_user_param_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthResolver.prototype, "restoreAccessToken", null);
AuthResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        auth_service_1.AuthService])
], AuthResolver);
exports.AuthResolver = AuthResolver;
//# sourceMappingURL=auth.resoslver.js.map