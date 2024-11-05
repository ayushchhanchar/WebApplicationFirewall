const express = require('express');
const router = express.Router();

let rateLimit = 100; // Default rate limit

// POST settings
router.post('/', (req, res) => {
  const { rateLimit: newRateLimit } = req.body;
  rateLimit = newRateLimit;
  res.json({ message: 'Settings updated', rateLimit });
});

module.exports = router;
