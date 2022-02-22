import { Strategy, Profile } from 'passport-google-oauth20';
declare const JwtGoogleStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtGoogleStrategy extends JwtGoogleStrategy_base {
    constructor();
    validate(accessToken: string, refreshToken: string, profile: Profile): {
        email: string;
        password: string;
        name: string;
        age: number;
    };
}
export {};
