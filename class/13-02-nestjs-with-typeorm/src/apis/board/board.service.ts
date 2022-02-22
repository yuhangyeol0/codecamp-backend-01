import { Injectable } from '@nestjs/common';

@Injectable() //의존성 주입 관련된 데코레이턴
export class BoardService {
  getHello(): string {
    return 'Hello World!';
  }
}
