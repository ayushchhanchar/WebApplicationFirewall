const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

// Security middleware using Helmet
const securityMiddleware = (app) => {
  app.use(helmet());

  // Rate limiting middleware
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100, 
    message: 'Too many requests from this IP, please try again later.'
  });

  app.use(limiter);
};

module.exports = securityMiddleware;
