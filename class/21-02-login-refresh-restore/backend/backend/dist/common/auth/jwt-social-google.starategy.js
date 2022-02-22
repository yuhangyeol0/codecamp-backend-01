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
exports.JwtGoogleStrategy = void 0;
const passport_google_oauth20_1 = require("passport-google-oauth20");
const passport_1 = require("@nestjs/passport");
const common_1 = require("@nestjs/common");
let JwtGoogleStrategy = class JwtGoogleStrategy extends (0, passport_1.PassportStrategy)(passport_google_oauth20_1.Strategy, 'google') {
    constructor() {
        super({
            clientID: '194644980740-5q8d0ru7h1k7a9fg91or76hi2iqrhl5g.apps.googleusercontent.com',
            clientSecret: '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',
            callbackURL: 'http://localhost:3000/login/google/callback',
            scope: ['email', 'profile'],
        });
    }
    validate(accessToken, refreshToken, profile) {
        return {
            email: profile.emails[0].value,
            password: profile.id,
            name: profile.displayName,
            age: 0,
        };
    }
};
JwtGoogleStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], JwtGoogleStrategy);
exports.JwtGoogleStrategy = JwtGoogleStrategy;
//# sourceMappingURL=jwt-social-google.starategy.js.map