const helmet = require('helmet');

const applyHelmet = (app) => {
  app.use(helmet());
};

module.exports = applyHelmet;