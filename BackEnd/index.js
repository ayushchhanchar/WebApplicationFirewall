const express = require('express');
const cors = require('cors');
const loggerMiddleware = require('./src/middleware/logger');
const securityMiddleware = require('./src/middleware/security');
const logsRouter = require('./src/routes/logs');
const statsRouter = require('./src/routes/stats');
const settingsRouter = require('./src/routes/settings');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies
loggerMiddleware(app); // Apply logging middleware
securityMiddleware(app); // Apply security middleware

// Routes
app.use('/api/logs', logsRouter);
app.use('/api/stats', statsRouter);
app.use('/api/settings', settingsRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
