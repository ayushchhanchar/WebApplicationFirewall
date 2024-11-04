const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const PORT = 5000;

// Middleware
app.use(helmet()); // Security headers
app.use(cors()); // Allow frontend access
app.use(morgan('dev')); // HTTP request logging

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Test route
app.get('/', (req, res) => {
  res.send('WAF Backend is running');
});





app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
