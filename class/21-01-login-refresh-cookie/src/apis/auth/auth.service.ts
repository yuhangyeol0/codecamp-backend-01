import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  setRefreshToken({ user, res }) {
    const refreshToken = this.jwtService.sign(
      { email: user.email, sub: user.id },
      { secret: 'myRefreshKey', expiresIn: '2w' },
    );
    //개발환경
    res.setHeader('Set-Cookie', `refreshToken=${refreshToken}`);

    //배포환경
    // res.setHeader('Access-control-Allow-Origin', 'https://myfrontsite.com'); //어디서 온 요청을 허락해 주는지
    // res.setHeader(
    //   'Set-Cookie',
    //   `refreshToken=${refreshToken};path=/; domain=mybacksite.com; SameSite=None; Secure; httpOnly;`,
    // );
  }

  getAccessToken({ user }) {
    return this.jwtService.sign(
      { email: user.email, sub: user.id },
      { secret: 'myAccessKey', expiresIn: '1h' }, //인증용 , refreshToken은 재발급용
    );
  }
}
