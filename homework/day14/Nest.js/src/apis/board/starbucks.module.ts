import { Module } from '@nestjs/common';
import { StarbucksResolver } from './starbucks.resolver';
import { StarbucksService } from './starbucks.service';
//각각의 모듈을 최종적으로 조립하는것 이것을 최종적으로 app.module로 가져가는것.
@Module({
  //   imports: [],
  //   controllers: [AppController],
  providers: [StarbucksResolver, StarbucksService],
})
export class StarbucksModule {}
