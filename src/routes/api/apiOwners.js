const express = require('express');
const router = express.Router();

router.get('/api/search', (req, res) => {
  res.json({ searching: 'for something' });
});

module.exports = router;
