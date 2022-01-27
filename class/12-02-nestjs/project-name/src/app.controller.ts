import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() //데코레이터 (=함수)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/product/gethello')
  getHello(): string {
    return this.appService.getHello();
  }
}
