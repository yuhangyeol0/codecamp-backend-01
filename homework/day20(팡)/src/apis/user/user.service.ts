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

  async create({ createUserInput }) {
    // const { email, ...user } = createUserInput;
    // console.log('bbb', email);
    // console.log('aaa', createUserInput.email);
    const result1 = await this.userRepository.findOne({
      email: createUserInput.email,
    });

    //console.log('abc', createUserInput);

    if (result1) throw new ConflictException('이미 등록된 이메일입니다');

    return await this.userRepository.save({ ...createUserInput });
  }

  async findAll() {
    const products = await this.userRepository.find({});
    return products;
  }

  async findOne({ productId }) {
    const product = await this.userRepository.findOne({
      where: { id: productId },
    });
    return product;
  }
  async update({ productId, updateUserInput }) {
    const User = await this.userRepository.findOne({ id: productId });
    const newUser = { ...User, ...updateUserInput };
    const updatedUser = await this.userRepository.save(newUser);
    return updatedUser;
  }

  async delete({ productId }) {
    const result = await this.userRepository.softDelete({ id: productId }); // 모든조건 삭제 가능
    return result.affected ? true : false;
  }
}
