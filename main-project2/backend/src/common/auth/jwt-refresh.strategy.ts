import { Strategy } from 'passport-jwt';

import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(Strategy, 'refresh') {
  // 토큰 검증을 하는 로직 -> 만약 여기서 잘못되면 프론트로 에러발생
  //
  //
  //Strategy는 검증용으로 사용하고 뒤에오는 이름은 무엇을 검증하느냐에 따라 사용자가 알아서 지으면 된다 이번경우는 acceessToken을 다루기때문에 'access'를 넣어주었다
  constructor() {
    super({
      jwtFromRequest: (req) => {
        const cookies = req.headers.cookies;
        return cookies.replace('refreshToken=', '');
      },
      secretOrKey: 'myRefreshKey',
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
