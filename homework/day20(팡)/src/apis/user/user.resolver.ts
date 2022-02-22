import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserInput } from './dto/createUser.input';
import { UpdateUserInput } from './dto/updateUser.input';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  fetchUsers() {
    return this.userService.findAll();
  }

  @Query(() => User)
  fetchUser(@Args(`productId`) productId: string) {
    return this.userService.findOne({ productId });
  }

  @Mutation(() => User)
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    //console.log(createUserInput);

    return await this.userService.create({ createUserInput });
  }

  @Mutation(() => User)
  async updateUser(
    @Args(`productId`) productId: string,
    @Args(`updateUserInput`) updateUserInput: UpdateUserInput,
  ) {
    //await this.userService.checkout({ productId });

    return this.userService.update({ productId, updateUserInput });
  }

  @Mutation(() => Boolean)
  deleteUser(@Args('productId') productId: string) {
    return this.userService.delete({ productId });
  }
}
