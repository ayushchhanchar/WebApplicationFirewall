const express = require("express");
const router = express.Router();
const Setting = require("../models/Setting");

// Get WAF settings
router.get("/", async (req, res) => {
  try {
    const settings = await Setting.findOne();
    res.json(settings || { message: "No settings available" });
  } catch (error) {
    console.error("Error fetching settings:", error);
    res.status(500).json({ message: "Error fetching settings" });
  }
});

// Update WAF settings
router.post("/", async (req, res) => {
  try {
    const { rateLimit, rateWindow } = req.body;
    let settings = await Setting.findOne();

    if (!settings) {
      settings = new Setting();
    }
    settings.rateLimit = rateLimit || settings.rateLimit;
    settings.rateWindow = rateWindow || settings.rateWindow;
    await settings.save();
    res.status(201).json(settings);
  } catch (error) {
    console.error("Error updating settings:", error);
    res.status(500).json({ message: "Error updating settings" });
  }
});

module.exports = router;
