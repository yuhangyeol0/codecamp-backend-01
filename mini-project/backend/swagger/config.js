export const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'mini-project api',
        version: '1.0.0',
      },
    },
    apis: ['./swagger/*.js'], // files containing annotations as above
  };