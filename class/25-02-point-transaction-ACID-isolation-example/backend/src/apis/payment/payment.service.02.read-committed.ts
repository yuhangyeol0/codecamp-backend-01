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
      //하나의 트랜잭션 내에서 500원이 조회됐으면,
      //해당 트랜잭션이 끝나기 전까지는 (커밋전까지는) 다시조회하더라도 항상 500원이 조회(Repeatable-Read)되어야 함
      //1초가 반복해서 조회하는 중에 누군가 등록하면(create), Reapeatable-Read 보장되지 않음 => Non-Reapeatable-Read문제
      setInterval(async () => {
        const payment = await queryRunner.manager.find(Payment);
        console.log(payment);
      }, 1000);

      // queryRunner.commitTransaction();
      // return payment;
    } catch (error) {
      queryRunner.rollbackTransaction();
    }
  }

  async create({ amount }) {
    const queryRunner = await this.connection.createQueryRunner();
    queryRunner.connect();
    queryRunner.startTransaction('READ COMMITTED');
    try {
      //중간에 돈 추가해보기
      const payment = await this.paymentRepository.create({ amount }); //객체에 만들어지는것
      await queryRunner.manager.save(payment);
      queryRunner.commitTransaction();
    } catch (error) {
      queryRunner.rollbackTransaction();
    }
  }
}
