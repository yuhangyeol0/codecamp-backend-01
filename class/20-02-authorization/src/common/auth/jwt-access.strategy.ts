import { Strategy, ExtractJwt } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtAccessStrategy extends PassportStrategy(Strategy, 'access') {
  constructor() {
    //검증로직, 실패시 밑으로 안가고 프론트로 넘어감
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'myAccessKey',
    });
  }

  //검증끝나고 수행되는 부분
  validate(payload: any) {
    console.log(payload);
    return {
      //fetchuser로 들어가게됨
      id: payload.sub,
      email: payload.email,
    }; //유저라는곳 안에 들어감 -> gql-user.param.ts
  }
}
//user.resolver에서 사용하려고 만든것. user모듈에 저장
