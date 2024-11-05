const express = require('express');
const router = express.Router();

// Sample statistics (replace this with your database logic)
const stats = {
  totalRequests: 1000,
  blockedRequests: 50,
  suspiciousActivities: 10,
};

// GET stats
router.get('/', (req, res) => {
  res.json(stats);
});

module.exports = router;
