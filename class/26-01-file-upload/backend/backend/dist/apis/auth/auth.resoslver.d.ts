import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';
import { ICurrentUser } from 'src/common/auth/gql-user.param';
export declare class AuthResolver {
    private readonly userService;
    private readonly authService;
    constructor(userService: UserService, authService: AuthService);
    login(email: string, password: string, context: any): Promise<string>;
    restoreAccessToken(currentUser: ICurrentUser): void;
}
