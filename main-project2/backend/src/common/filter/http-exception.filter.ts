import { Catch, HttpException, ExceptionFilter } from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException) {
    const status = exception.getStatus();
    const message = exception.message;

    console.log('===========================');
    console.log('에러가 발생했어요!!!');
    console.log('에러내용:', message);
    console.log('에러코드:', status);
    console.log('===========================');
  }
}
