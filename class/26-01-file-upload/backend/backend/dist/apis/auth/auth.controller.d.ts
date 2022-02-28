import { Request, Response } from 'express';
import { User } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';
interface IOAuthUser {
    user: Pick<User, 'email' | 'password' | 'name' | 'age'>;
}
export declare class AuthController {
    private readonly userService;
    private readonly authService;
    constructor(userService: UserService, authService: AuthService);
    loginGoogle(req: Request & IOAuthUser, res: Response): Promise<void>;
}
export {};
