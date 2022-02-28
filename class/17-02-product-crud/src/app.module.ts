import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { BoardModule } from './apis/board/board.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductCategoryModule } from './apis/productCategory/productCategory.module';
import { Product } from './apis/product/entities/product.entity';
import { ProductModule } from './apis/product/product.module';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

@Module({
  imports: [
    BoardModule, //
    ProductModule,
    ProductCategoryModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'src/common/graphql/schema.gql',
    }), //
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'wlzh1234',
      database: 'myproject',
      entities: [__dirname + '/apis/**/*.entity.*'], //ts는 실제 실행될때 js로 저장됨
      synchronize: true,
      logging: true,
    }),
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
