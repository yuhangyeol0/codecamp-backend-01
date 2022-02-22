import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { UserService } from './user.service';
import { UpdateUserInput } from './dto/updateUserInput';
import * as bcrypt from 'bcrypt';
import { CurrentUser, ICurrentUser } from 'src/common/auth/gql-user.param';
import { JwtAccessStrategy } from 'src/common/auth/jwt-access.strategy';
import { GqlAuthAccessGuard } from 'src/common/auth/gql-auth.guard';
import { UseGuards } from '@nestjs/common';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  fetchUsers() {
    return this.userService.findAll();
  }

  @UseGuards(GqlAuthAccessGuard)
  @Query(() => User)
  async fetchUser(
    @CurrentUser() currentUser: ICurrentUser, //
  ) {
    return await this.userService.findOne({ email: currentUser.email });
  }

  @Mutation(() => User)
  async createUser(
    @Args('email') email: string,
    @Args('password') password: string,
    @Args('name') name: string,
    @Args('age') age: number,
  ) {
    const hashedPassword = await bcrypt.hash(password, 5); //hash의 두번째 인자는 salt의 횟수이다.
    return this.userService.create({ hashedPassword, email, name, age });
  }

  @UseGuards(GqlAuthAccessGuard)
  @Mutation(() => User)
  async updateUser(
    @CurrentUser() currentUser: ICurrentUser,
    @Args(`email`) email: string,
    @Args(`updateUserInput`) updateUserInput: UpdateUserInput,
  ) {
    return this.userService.update({ email, updateUserInput });
  }

  @UseGuards(GqlAuthAccessGuard)
  @Mutation(() => Boolean)
  async deleteUser(
    @CurrentUser() currentUser: ICurrentUser,
    @Args('email') email: string,
  ) {
    return await this.userService.delete({ email });
  }
}
