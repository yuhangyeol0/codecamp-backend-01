import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductCategory } from './entities/productCategory.entity';
import { ProductCategoryService } from './productCategory.service';
import { ProductCategoryResolver } from './productCategory.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([ProductCategory])], //TypeOrmModule.Feature은 ProductCategory라는 엔티티와 메서드(서비스에서 지정한 비지니스로직을 말하는건가...?)를 연결해준다.
  providers: [ProductCategoryResolver, ProductCategoryService],
})
export class ProductCategoryModule {}
