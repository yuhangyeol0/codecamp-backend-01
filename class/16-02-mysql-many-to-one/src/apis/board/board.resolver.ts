import { BoardService } from './board.service';
import { Query, Resolver, Mutation, Args } from '@nestjs/graphql';
import { Board } from './entities/board.entity';
import { title } from 'process';
import { CreateBoardInput } from './dto/createBoard.input';

@Resolver()
export class BoardResolver {
  constructor(private readonly boardService: BoardService) {}
  @Query(() => Board) //그래프큐엘은 대문자
  fetchBoards(): Board[] {
    //타입스크립트는 소문자
    return this.boardService.findAll();
  }

  @Mutation(() => String)
  createBoard(
    @Args('writer') writer: string,
    @Args('title') title: string,
    @Args('contents') contents: string,
    @Args('createBoardInput') createBoardInput: CreateBoardInput,
  ): string {
    return this.boardService.create({
      writer,
      title,
      contents,
      createBoardInput,
    });
  }
}
