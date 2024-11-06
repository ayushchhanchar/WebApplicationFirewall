const express = require("express");
const router = express.Router();
const Log = require("../models/Log");

// Route to get all logs
router.get("/", async (req, res) => {
  console.log("Fetching logs...");
  try {
    const logs = await Log.find().sort({ timestamp: -1 });
    res.json(logs);
    console.log("Logs fetched successfully.");
  } catch (error) {
    console.error("Error fetching logs:", error);

    res.status(500).json({ message: "Error fetching logs" });
  }
  console.log("Fetching logs.222..");

  
});

// Route to add a new log
router.post("/", async (req, res) => {
  try {
    const { ipAddress, requestUrl, httpMethod, statusCode } = req.body;
    const newLog = new Log({
      ipAddress,
      requestUrl,
      httpMethod,
      statusCode,
    });
    await newLog.save();
    res.status(201).json(newLog);
  } catch (error) {
    console.error("Error saving log:", error);
    res.status(500).json({ message: "Error saving log" });
  }
});

module.exports = router;
