import { ExecutionContext } from '@nestjs/common';
declare const GqlAuthAccessGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class GqlAuthAccessGuard extends GqlAuthAccessGuard_base {
    getRequest(context: ExecutionContext): any;
}
declare const GqlAuthRefreshsGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class GqlAuthRefreshsGuard extends GqlAuthRefreshsGuard_base {
    getRequest(context: ExecutionContext): any;
}
export {};
