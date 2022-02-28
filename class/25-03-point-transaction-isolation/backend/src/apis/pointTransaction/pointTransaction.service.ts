import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { Connection, Repository } from 'typeorm';
import {
  PointTransaction,
  POINT_TRANSACTION_STATUS_ENUM,
} from './entities/pointTransaction.entity';

@Injectable()
export class PointTransactionService {
  constructor(
    @InjectRepository(PointTransaction)
    private readonly pointTransactionRepository: Repository<PointTransaction>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    private readonly connection: Connection,
  ) {}
  async create({ impUid, amount, currentUser }) {
    const queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect(); //디비랑 연결됨
    await queryRunner.startTransaction('SERIALIZABLE');
    try {
      const pointTransaction = await this.pointTransactionRepository.create({
        impUid: impUid,
        amount: amount,
        user: currentUser,
        status: POINT_TRANSACTION_STATUS_ENUM.PAYMENT,
      });
      // await this.pointTransactionRepository.save(pointTransaction);
      queryRunner.manager.save(pointTransaction);
      // throw new Error();
      //2. 유저 정보 조회
      // const user = await this.userRepository.findOne({ id: currentUser.id });
      const user = await queryRunner.manager.findOne(
        User,
        { id: currentUser.id },
        { lock: { mode: 'pessimistic_write' } },
      );
      console.log(user);

      //3. 유저의 돈 업데이트
      // await this.userRepository.update(
      //   { id: user.id },
      //   { point: user.point + amount },
      // );
      const updatedUser = this.userRepository.create({
        ...user,
        point: user.point + amount,
      });
      await queryRunner.manager.save(updatedUser); //임시저장
      await queryRunner.commitTransaction(); //커밋후에 저장
      //4. 최종결과 돌려주기
      return pointTransaction;
    } catch (error) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }

    //1. pointTransaction테이블에 거래기록 생성
  }
}
