import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { StarbucksModule } from './apis/board/starbucks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Starbucks } from './apis/board/entities/starbucks.entities';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

@Module({
  imports: [
    StarbucksModule, //
    GraphQLModule.forRoot({
      autoSchemaFile: 'src/common/graphql/schema.gql',
    }), //
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: 'wlzh1234',
    //   database: 'mysql',
    //   entities: [Board],
    //   synchronize: true,
    //   logging: true,
    // }),
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
