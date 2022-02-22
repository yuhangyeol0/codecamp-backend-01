import { Injectable } from '@nestjs/common';
import { Starbucks } from './entities/starbucks.entities';

@Injectable() //의존성 주입 관련된 데코레이턴
export class StarbucksService {
  findAll(): Starbucks[] {
    //데이터 조회하는 로직
    return [
      {
        menu: '아이스아메리카노',
        price: 4100,
        energy: 10,
        saturated_fat: 0,
        protein: 1,
        salt: 5,
        sugar: 0,
        caffeine: 150,
      },
      {
        menu: '돌체라떼',
        price: 5600,
        energy: 255,
        saturated_fat: 2.6,
        protein: 12,
        salt: 190,
        sugar: 39,
        caffeine: 150,
      },
      {
        menu: '카페모카',
        price: 5100,
        energy: 290,
        saturated_fat: 9,
        protein: 10,
        salt: 105,
        sugar: 25,
        caffeine: 95,
      },
      {
        menu: '카페라떼',
        price: 4600,
        energy: 180,
        saturated_fat: 5,
        protein: 10,
        salt: 115,
        sugar: 13,
        caffeine: 75,
      },
      {
        menu: '바닐라크림콜드브루',
        price: 5500,
        energy: 125,
        saturated_fat: 6,
        protein: 3,
        salt: 58,
        sugar: 11,
        caffeine: 150,
      },
    ];
  }
  create(args): string {
    //데이터 등록하는 로직
    console.log(args);
    return '등록에 성공하였습니다.';
  }
}
