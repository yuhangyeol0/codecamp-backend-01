import { BoardService } from './board.service';
import { Board } from './entities/board.entity';
import { CreateBoardInput } from './dto/createBoard.input';
export declare class BoardResolver {
    private readonly boardService;
    constructor(boardService: BoardService);
    fetchBoards(): Board[];
    createBoard(writer: string, title: string, contents: string, createBoardInput: CreateBoardInput): string;
}
