import { Strategy, Profile } from 'passport-google-oauth20';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtGoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientID:
        '194644980740-5q8d0ru7h1k7a9fg91or76hi2iqrhl5g.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'http://localhost:3000/login/google/callback',
      scope: ['email', 'profile'],
    });
  }

  validate(accessToken: string, refreshToken: string, profile: Profile) {
    // 카카오 네이버 할 때는 console.log(profile) 찍어봐야함
    // console.log(accessToken)
    // console.log(refreshToken)
    // console.log(profile)
    return {
      email: profile.emails[0].value,
      password: profile.id,
      name: profile.displayName,
      age: 0,
    };
  }
}
