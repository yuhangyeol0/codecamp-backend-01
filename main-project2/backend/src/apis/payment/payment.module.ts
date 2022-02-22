import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Payment } from './entities/payment.entity';
import { PaymentResolver } from './payment.resolver';
import { PaymentSerivce } from './payment.service';

@Module({
  imports: [TypeOrmModule.forFeature([Payment])],
  providers: [PaymentSerivce, PaymentResolver],
})
export class PaymentModule {}
