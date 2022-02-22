import { User } from './entities/user.entity';
import { UserService } from './user.service';
import { ICurrentUser } from 'src/common/auth/gql-user.param';
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    createUser(email: string, password: string, name: string, age: number): Promise<{
        email: any;
        password: any;
        name: any;
        age: any;
    } & User>;
    fetchUser(CurrentUser: ICurrentUser): string;
}
