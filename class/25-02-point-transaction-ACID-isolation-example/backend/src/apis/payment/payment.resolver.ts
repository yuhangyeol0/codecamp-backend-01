import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Payment } from './entities/payment.entity';
import { PaymentService } from './payment.service';

@Resolver()
export class PaymentResolver {
  constructor(private readonly paymentService: PaymentService) {}
  @Mutation(() => Payment)
  async createPayment(@Args('amount') amount: number) {
    return await this.paymentService.create({ amount });
  }

  @Query(() => [Payment])
  async fetchPayment() {
    return await this.paymentService.findAll();
  }
}
