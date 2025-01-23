const express = require('express');
const router = express.Router();

router.get('/home', (req, res) => {
  res.render('faculty/home', { title: 'Faculty Home' });
});

router.get('/:id', (req, res) => {
  res.send(`Faculty details for ID ${req.params.id}`);
});

router.post('/', (req, res) => {
  res.send('Faculty POST request received.');
});

router.put('/:id', (req, res) => {
  res.send(`Faculty details updated for ID ${req.params.id}`);
});

router.patch('/:id', (req, res) => {
  res.send(`Faculty partial update for ID ${req.params.id}`);
});

module.exports = router;
