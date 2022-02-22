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
    queryRunner.startTransaction('READ COMMITTED');
    try {
      setInterval(async () => {
        const payment = await queryRunner.manager.find(Payment);
        console.log(payment);
      }, 1000);

      // queryRunner.commitTransaction();
      // return payment;
    } catch (error) {
      queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }

  async create({ amount }) {
    const queryRunner = await this.connection.createQueryRunner();
    queryRunner.connect();
    queryRunner.startTransaction('READ COMMITTED');
    try {
      const payment = await this.paymentRepository.create({ amount }); //객체에 만들어지는것
      await queryRunner.manager.save(payment);
      queryRunner.commitTransaction();
    } catch (error) {
      queryRunner.rollbackTransaction();
    }
  }
}
