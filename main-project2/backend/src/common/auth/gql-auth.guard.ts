import { ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class GqlAuthAccessGuard extends AuthGuard(`access`) {
  getRequest(context: ExecutionContext) {
    //getRequest는 요청할떄 해더 정보를 가지고있는것
    console.log('어쓰가드');
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req;
    // 여기서 받은 정보를 JwtAccessStrategy로 넘겨 header안을 검증 하고 검증이 되면 payload를 AuthGuard를 통해 fetchUser에 들어가게 된다.
  }
}

@Injectable()
export class GqlAuthRefreshGuard extends AuthGuard(`refresh`) {
  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req;
  }
}
