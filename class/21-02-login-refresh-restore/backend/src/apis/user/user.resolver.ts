import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { UserService } from './user.service';
import * as bcrypt from 'bcrypt';
import { UseGuards } from '@nestjs/common';
import { GqlAuthAccessGuard } from 'src/common/auth/gql-auth.guard';
import { CurrentUser, ICurrentUser } from 'src/common/auth/gql-user.param';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  async createUser(
    @Args('email') email: string,
    @Args('password') password: string,
    @Args('name') name: string,
    @Args('age') age: number,
  ) {
    const hashedPassword = await bcrypt.hash(password, 10);
    return await this.userService.create({ email, hashedPassword, name, age });
  }

  @UseGuards(GqlAuthAccessGuard)
  @Query(() => String)
  fetchUser(
    @CurrentUser() CurrentUser: ICurrentUser, //
  ) {
    console.log('실행됐습니다!!!');
    return '실행완료!!!';
  }
}
