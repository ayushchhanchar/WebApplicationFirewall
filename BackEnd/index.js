const dotenv = require('dotenv');
dotenv.config(); 

const express = require('express');
const cors = require('cors');
const loggerMiddleware = require('./src/middleware/logger');
const securityMiddleware = require('./src/middleware/security');
const logsRouter = require('./src/routes/logs');
const statsRouter = require('./src/routes/stats');
const settingsRouter = require('./src/routes/settings');
const connectDB = require('./src/config/db'); 

// Connect to MongoDB
connectDB(); 

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;
app.use(express.static("public"));
loggerMiddleware(app);
securityMiddleware(app); 

// Middleware
app.use(cors()); 
app.use(express.json()); 


// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the Web Application Firewall API!");
});
app.use('/api/logs', logsRouter);
app.use('/api/stats', statsRouter);
app.use('/api/settings', settingsRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
