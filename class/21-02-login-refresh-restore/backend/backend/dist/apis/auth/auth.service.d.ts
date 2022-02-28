import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    setRefreshToken({ user, res }: {
        user: any;
        res: any;
    }): void;
    getAccessToken({ user }: {
        user: any;
    }): string;
}
