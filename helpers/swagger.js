const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Progress Tracker Service',
      version: '0.0.1',
      description: 'Swagger documentation for Progress Tracker Web Service'
    },
    servers: [
      {
        url: 'https://progress-tracker-kocb.onrender.com',
        description: 'Deployed web service url'
      },
      {
        url: 'http://localhost:8000',
        description: 'Local server'
      }
    ]
  },
  apis: ['./routers/*.js']
}

const specs = swaggerJsdoc(options);

module.exports = {
  specs,
  swaggerUi
}