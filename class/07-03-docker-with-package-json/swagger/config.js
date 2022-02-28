export const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Mini Project API 명세서',
        version: '1.0.0',
      },
    },
    apis: ['./swagger/*.js'], //swagger폴더 안의 모든js파일
  };