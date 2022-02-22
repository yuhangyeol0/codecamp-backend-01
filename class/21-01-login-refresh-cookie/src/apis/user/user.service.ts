import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  findOne({ email }) {
    return this.userRepository.findOne({ email });
  }

  async create({ email, hashedPassword: password, name, age }) {
    const user = await this.userRepository.findOne({ email });
    if (user) throw new ConflictException('이미 가입된 이메일입니다.');
    //const password = hashedPassword
    return await this.userRepository.save({ email, password, name, age });
  }
}
