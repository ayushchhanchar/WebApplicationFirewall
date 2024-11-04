const cors = require('cors');

const applyCors = (app) => {
  app.use(cors());
};

module.exports = applyCors;
