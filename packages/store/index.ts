import {main} from './src';

const config = {
  rest: {
    port: +(process.env.PORT || 3000),
    host: process.env.HOST,
    openApiSpec: {
      // useful when used with OpenAPI-to-GraphQL to locate your application
      setServersFromRequest: true,
    },
  },
};

main(config).catch(err => {
  console.error('Cannot start the application.', err);
  process.exit(1);
});
