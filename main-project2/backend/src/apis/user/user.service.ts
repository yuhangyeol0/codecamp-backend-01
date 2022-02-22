import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateUserInput } from './dto/updateUserInput';
import { User } from './entities/user.entity';

interface IUpdate {
  email: string;
  updateUserInput: UpdateUserInput;
}

interface IDelete {
  email: string;
}

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create({ email, hashedPassword, name, age }) {
    const result = await this.userRepository.findOne({ email });
    if (result) throw new BadRequestException('이미 존재하는 이메일 입니다.');
    const password = hashedPassword;
    return await this.userRepository.save({ email, password, name, age });
  }

  async update({ email, updateUserInput }: IUpdate) {
    const user = await this.userRepository.findOne({ email });
    const newUser = { ...user, ...updateUserInput };
    const updatedUser = await this.userRepository.save(newUser);
    return updatedUser;
  }

  async delete({ email }: IDelete) {
    const result = await this.userRepository.softDelete({ email });
    return result.affected ? true : false;
  }

  async findAll() {
    const users = await this.userRepository.find();
    return users;
  }

  async findOne({ email }) {
    return await this.userRepository.findOne({ email });
  }
}
