import { Controller, Get } from '@nestjs/common';
import { BoardService } from './board.service';
import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class BoardResolver {
  constructor(private readonly boardService: BoardService) {}
  @Query(() => String) //그래프큐엘은 대문자
  getHello(): string {
    //타입스크립트는 소문자
    return this.boardService.getHello();
  }
}
