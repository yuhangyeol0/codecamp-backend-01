import { Injectable } from '@nestjs/common';
import { FileUpload } from 'graphql-upload';
import { Storage } from '@google-cloud/storage';

interface IFile {
  file: FileUpload;
}

@Injectable()
export class FileService {
  async upload({ file }: IFile) {
    const storage = new Storage({
      keyFilename: 'hangyeol-e78136b738cc.json',
      projectId: 'hangyeol',
    })
      .bucket('hangyeolyu')
      .file(file.filename);
    //이미지를 스토리지에 업로드

    const result = await new Promise((resolve, reject) => {
      file
        .createReadStream()
        .pipe(storage.createWriteStream())
        .on('finish', () => resolve(`hangyeolyu/${file.filename}`))
        .on('error', (error) => reject(error));
    });

    return result;
  }
}
