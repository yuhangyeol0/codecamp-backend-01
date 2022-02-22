import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductIngredient } from './entities/productingredient.entity';
import { ProductingredientResolver } from './productingredient.resolver';
import { ProductingredientService } from './productingredient.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProductIngredient])], //TypeOrmModule.Feature은 ProductCategory라는 엔티티와 메서드(서비스에서 지정한 비지니스로직을 말하는건가...?)를 연결해준다.
  providers: [ProductingredientResolver, ProductingredientService],
})
export class ProductIngredientModule {}
