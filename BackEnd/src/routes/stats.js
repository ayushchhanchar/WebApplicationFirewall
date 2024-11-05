const express = require("express");
const router = express.Router();
const Stat = require("../models/Stat");

// Route to get stats
router.get("/", async (req, res) => {
  try {
    const stats = await Stat.findOne().sort({ timestamp: -1 });
    res.json(stats || { message: "No stats available" });
  } catch (error) {
    console.error("Error fetching stats:", error);
    res.status(500).json({ message: "Error fetching stats" });
  }
});

// Route to increment request counters
router.post("/increment", async (req, res) => {
  try {
    const { blocked } = req.body;
    let stats = await Stat.findOne().sort({ timestamp: -1 });

    if (!stats) {
      stats = new Stat();
    }
    stats.totalRequests += 1;
    if (blocked) {
      stats.blockedRequests += 1;
    } else {
      stats.allowedRequests += 1;
    }
    await stats.save();
    res.status(201).json(stats);
  } catch (error) {
    console.error("Error updating stats:", error);
    res.status(500).json({ message: "Error updating stats" });
  }
});

module.exports = router;
