const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My API',
      version: '1.0.0',
      description: 'My API description'
    },
    servers: [
      { url: 'http://localhost:8080' }
    ]
  },
  apis: ['./src/routes*.js'],
};

const specs = swaggerJsdoc(options);

function swaggerMiddlewareInjection(app) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
}

module.exports = swaggerMiddlewareInjection;
