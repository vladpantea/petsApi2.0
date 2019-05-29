'use strict';

const fs = require('fs');
const path = require('path');
const http = require('http');

require('dotenv').config();
const app = require('express')();
const swaggerTools = require('swagger-tools');
const jsyaml = require('js-yaml');
const helmet = require('helmet');
const morgan = require('morgan');
const serverPort = 8090;

// swaggerRouter configuration
const options = {
  swaggerUi: path.join(__dirname, '/swagger.json'),
  controllers: path.join(__dirname, './controllers'),
  useStubs: process.env.NODE_ENV === 'development', // Conditionally turn on stubs (mock mode)
  validator: true,
  strict: true
};

// The Swagger document (require it, build it programmatically, fetch it from a URL, ...)
const spec = fs.readFileSync(path.join(__dirname, 'api/swagger.yaml'), 'utf8');
const swaggerDoc = jsyaml.safeLoad(spec);

// Initialize the Swagger middleware
swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {

  //use helmet to secure express app
  app.use(helmet());

  // use combined preset, see https://github.com/expressjs/morgan#combined
  app.use(morgan('combined'));

  // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
  app.use(middleware.swaggerMetadata());

  // Validate Swagger requests
  app.use(middleware.swaggerValidator());

  // Route validated requests to appropriate controller
  app.use(middleware.swaggerRouter(options));

  // Serve the Swagger documents and Swagger UI
  app.use(middleware.swaggerUi());

  // Start the server
  http.createServer(app).listen(serverPort, function () {
    console.log(`Your server is listening on port ${serverPort} (http://localhost:${serverPort})`);
    console.log(`Swagger-ui is available on http://localhost:${serverPort}/docs`);
  });
});
