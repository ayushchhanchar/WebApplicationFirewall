const morgan = require('morgan');

const applyMorgan = (app) => {
  app.use(morgan('combined'));
};

module.exports = applyMorgan;
