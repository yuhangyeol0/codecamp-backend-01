"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GqlAuthRefreshsGuard = exports.GqlAuthAccessGuard = void 0;
const graphql_1 = require("@nestjs/graphql");
const passport_1 = require("@nestjs/passport");
class GqlAuthAccessGuard extends (0, passport_1.AuthGuard)('access') {
    getRequest(context) {
        const ctx = graphql_1.GqlExecutionContext.create(context);
        return ctx.getContext().req;
    }
}
exports.GqlAuthAccessGuard = GqlAuthAccessGuard;
class GqlAuthRefreshsGuard extends (0, passport_1.AuthGuard)('refresh') {
    getRequest(context) {
        const ctx = graphql_1.GqlExecutionContext.create(context);
        return ctx.getContext().req;
    }
}
exports.GqlAuthRefreshsGuard = GqlAuthRefreshsGuard;
//# sourceMappingURL=gql-auth.guard.js.map