const express = require('express');
const applyHelmet = require('./Middleware/helmet');
const applyCors = require('./Middleware/cors');
const applyMorgan = require('./Middleware/morgan');
const applyRateLimit = require('./Middleware/rateLimit');

const app = express();
const PORT = 5000;

// Apply Middleware
applyHelmet(app);
applyCors(app);
applyMorgan(app);
applyRateLimit(app);

// Sample Route
app.get('/', (req, res) => {
  res.send('Hello, your WAF backend with separated middleware is working!');
  console.log('Request received at /');
});


// Start the Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
