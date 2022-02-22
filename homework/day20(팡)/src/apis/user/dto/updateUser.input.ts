import { PickType, InputType } from '@nestjs/graphql';
import { User } from '../entities/user.entity';

@InputType()
export class UpdateUserInput extends PickType(
  User,
  ['name', 'phonenumber'],
  InputType,
) {}
