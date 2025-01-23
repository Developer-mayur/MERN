const express = require('express');
const router = express.Router();

// Handle /student route
router.get('/', (req, res) => {
  res.render('student/home'); // Make sure the view exists
});

module.exports = router;
