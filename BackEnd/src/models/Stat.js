const mongoose = require("mongoose");

const statSchema = new mongoose.Schema({
  totalRequests: {
    type: Number,
    default: 0,
  },
  blockedRequests: {
    type: Number,
    default: 0,
  },
  allowedRequests: {
    type: Number,
    default: 0,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Stat = mongoose.model("Stat", statSchema);
module.exports = Stat;
