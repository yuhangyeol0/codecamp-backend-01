import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './apis/auth/auth.module';
// import { ProductMainCategoryModule } from './apis/mainCategory/productMainCategory.module';
import { ProductModule } from './apis/product/product.module';
import { UserModule } from './apis/user/user.module';
import { JwtRefreshStrategy } from './common/auth/jwt-refresh.strategy';
import { JwtGoogleStrategy } from './common/auth/jwt-social-google.strategy';
import { JwtNaverStrategy } from './common/auth/jwt-social-naver.strategy';
import { ConfigModule } from '@nestjs/config';
import { ApolloDriver } from '@nestjs/apollo';
import { PointTransactionModule } from './apis/pointTransaction/pointTransaction.module';
import { SubCategoryModule } from './apis/subCategory/subCategory.module';

// import { AppController } from './app.controller';
// import { AppService } from './app.service';

@Module({
  imports: [
    UserModule,
    ProductModule,
    PointTransactionModule,
    SubCategoryModule,
    AuthModule,
    JwtRefreshStrategy,
    JwtGoogleStrategy,
    JwtNaverStrategy,
    // ProductMainCategoryModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: 'src/common/graphql/schema.gql',
      context: ({ req, res }) => ({ req, res }),
    }), //
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'wlzh1234',
      database: 'mainproject1',
      entities: [__dirname + '/apis/**/*.entity.*'], //ts는 실제 실행될때 js로 저장됨
      synchronize: true,
      logging: true,
    }),
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
