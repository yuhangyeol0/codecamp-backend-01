import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { FileService } from './file.service';
import { FileUpload, GraphQLUpload } from 'graphql-upload';

@Resolver()
export class FileResolver {
  constructor(private readonly fileService: FileService) {}
  @Mutation(() => String)
  async uploadFile(
    @Args({ name: 'file', type: () => GraphQLUpload }) file: FileUpload,
  ) {
    return await this.fileService.upload({ file });
  }
}
