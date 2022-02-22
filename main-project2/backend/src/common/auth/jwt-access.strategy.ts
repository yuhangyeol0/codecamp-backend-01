import { Strategy, ExtractJwt } from 'passport-jwt';

import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

@Injectable()
export class JwtAccessStrategy extends PassportStrategy(Strategy, 'access') {
  // 토큰 검증을 하는 로직 -> 만약 여기서 잘못되면 프론트로 에러발생
  // PassportStrategy는 토큰의 자체의 키값, 만료기간
  //
  //
  //Strategy는 검증용으로 사용하고 뒤에오는 이름은 무엇을 검증하느냐에 따라 사용자가 알아서 지으면 된다 이번경우는 acceessToken을 다루기때문에 'access'를 넣어주었다
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      //jwtFromRequest: ExtractJwt.fromAuth...()는 발급된 토큰값을 가져와서 밑에 secretOrKey와 비교한다
      //
      secretOrKey: 'myAccessKey', // 반드시 secretOrkey는 auth에서 지정해둔 secretket와 동일해야한다
      //jwtFromRequst: ExtractJwt.FromAuthHeaderAsBearerToken() 이 하는 역할은 HEADERS안에 authorization안에 bearer뒤 토큰값만 가져올수있음
    });
  }

  // 검증완료후 실행될 로직
  async validate(payload: any) {
    return {
      id: payload.sub,
      email: payload.email,
      // id와 email은 사전에 정해둔 값으로 jwt 토큰을 조회해보면 리턴되는값들이다
    };
    //여기서 return 된값이 user에 @UserGuards에 들어가서 검증을 받고 그값이 fetchUser에 들어가게 된다.
  }
}
