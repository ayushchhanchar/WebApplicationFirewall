const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
  ipAddress: {
    type: String,
    required: true,
  },
  requestUrl: {
    type: String,
    required: true,
  },
  httpMethod: {
    type: String,
    required: true,
  },
  statusCode: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Log = mongoose.model("Log", logSchema);
module.exports = Log;
