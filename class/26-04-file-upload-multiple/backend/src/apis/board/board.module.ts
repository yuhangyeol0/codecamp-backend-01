import { Module } from '@nestjs/common';
import { BoardResolver } from './board.resolver';
import { BoardService } from './board.service';
//각각의 모듈을 최종적으로 조립하는것 이것을 최종적으로 app.module로 가져가는것.
@Module({
  //   imports: [],
  //   controllers: [AppController],
  providers: [BoardResolver, BoardService],
})
export class BoardModule {}
