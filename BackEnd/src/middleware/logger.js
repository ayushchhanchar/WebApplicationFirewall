const morgan = require('morgan');

// Logger middleware using Morgan
const loggerMiddleware = (app) => {
  app.use(morgan('combined'));
};

module.exports = loggerMiddleware;
