import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from '../user/user.service';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { User } from '../user/entities/user.entity';
@Module({
  imports: [TypeOrmModule.forFeature([User]), JwtModule.register({})],
  providers: [UserService, AuthResolver, AuthService],
})
export class AuthModule {}
