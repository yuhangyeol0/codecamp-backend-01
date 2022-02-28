import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { Payment } from './entities/payment.entity';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(Payment)
    private readonly paymentRepository: Repository<Payment>,

    private readonly connection: Connection,
  ) {}

  async findAll() {
    const queryRunner = await this.connection.createQueryRunner();
    queryRunner.connect();
    queryRunner.startTransaction('SERIALIZABLE');
    try {
      //조회시 락을 걸고 조회함으로써, 다른 쿼리에서 조회못하게 막음(대기시킴) - Select ~ For Update
      const payment = await queryRunner.manager.find(Payment, {
        lock: { mode: 'pessimistic_write' },
      });
      console.log(payment);
      //처리에 5초간의 시간이 걸림을 가정 !
      setTimeout(async () => {
        await queryRunner.commitTransaction();
      }, 5000);
      return payment;
    } catch (error) {
      queryRunner.rollbackTransaction();
    }
  }

  async create({ amount }) {
    const queryRunner = await this.connection.createQueryRunner();
    queryRunner.connect();
    queryRunner.startTransaction('SERIALIZABLE');
    try {
      const payment = await queryRunner.manager.find(Payment);
      console.log('----------철수-------------');
      console.log(payment);
      console.log('--------------------------');
      queryRunner.commitTransaction();
      return payment;
    } catch (error) {
      queryRunner.rollbackTransaction();
    }
  }
}
