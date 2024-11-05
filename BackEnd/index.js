// Load environment variables
const dotenv = require('dotenv');
dotenv.config(); // Make sure this is at the very top

const express = require('express');
const cors = require('cors');
const loggerMiddleware = require('./src/middleware/logger');
const securityMiddleware = require('./src/middleware/security');
const logsRouter = require('./src/routes/logs');
const statsRouter = require('./src/routes/stats');
const settingsRouter = require('./src/routes/settings');
const connectDB = require('./src/config/db'); // Import after dotenv.config()

// Connect to MongoDB
connectDB(); // Call the database connection function after dotenv.config()

const app = express();
app.use(express.json());
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
