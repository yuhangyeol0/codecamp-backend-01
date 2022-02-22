import { PickType, InputType } from '@nestjs/graphql';
import { User } from '../entities/user.entity';

@InputType()
export class UpdateUserInput extends PickType(
  User,
  ['email', 'password', 'name', 'age'],
  InputType,
) {}
