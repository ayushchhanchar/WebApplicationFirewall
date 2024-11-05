const express = require('express');
const router = express.Router();

// Sample logs (replace this with your database logic)
const logs = [
  { ip: '192.168.1.1', path: '/api/test', status: 200 },
  { ip: '192.168.1.2', path: '/api/test', status: 403 }
];

// GET logs
router.get('/', (req, res) => {
  res.json(logs);
});

module.exports = router;
