// src/models/Setting.js
const mongoose = require("mongoose");

const settingSchema = new mongoose.Schema({
  rateLimit: {
    type: Number,
    default: 100, // Default requests per window
  },
  rateWindow: {
    type: Number,
    default: 15 * 60 * 1000, // Default to 15 minutes in milliseconds
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

settingSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const Setting = mongoose.model("Setting", settingSchema);
module.exports = Setting;
