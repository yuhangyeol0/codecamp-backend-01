import { StarbucksService } from './starbucks.service';
import { Query, Resolver, Mutation, Args } from '@nestjs/graphql';
import { Starbucks } from './entities/starbucks.entities';
import { CreateStarbucksInput } from './dto/createStarbucks.input';

@Resolver()
export class StarbucksResolver {
  constructor(private readonly starbucksService: StarbucksService) {}

  @Query(() => [Starbucks]) //그래프큐엘은 대문자
  fetchStarbucks(): Starbucks[] {
    //타입스크립트는 소문자
    return this.starbucksService.findAll();
  }

  @Mutation(() => String)
  createStarbucks(
    @Args('createStarbucksInput') createStarbucksInput: CreateStarbucksInput,
  ): string {
    return this.starbucksService.create({
      createStarbucksInput,
    });
  }
}
