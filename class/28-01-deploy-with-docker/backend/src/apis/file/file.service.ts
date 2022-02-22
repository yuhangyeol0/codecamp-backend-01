import { Injectable } from '@nestjs/common';
import { FileUpload } from 'graphql-upload';
import { Storage } from '@google-cloud/storage';

interface IFile {
  files: FileUpload[];
}

@Injectable()
export class FileService {
  async upload({ files }: IFile) {
    const storage = new Storage({
      keyFilename: process.env.KEY_FILE_NAME,
      projectId: 'hangyeol',
    }).bucket('hangyeolyu');

    //일단 먼저 다 받기
    const waitedFiles = await Promise.all(files);
    //구글 스토리지에 동시에 모두 올려버리기
    const results = await Promise.all(
      waitedFiles.map((file) => {
        return new Promise((resolve, reject) => {
          file
            .createReadStream()
            .pipe(storage.file(file.filename).createWriteStream())
            .on('finish', () => resolve(`hangyeolyu/${file.filename}`))
            .on('error', (error) => reject(error));
        });
      }),
    );
    return results;
  }
}
