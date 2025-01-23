const express = require('express');
const router = express.Router();

const data = [
  { id: 1, sname: 'Vinod', age: 20, stream: 'CS', sem: 'VI', 'coding level': 'Intermediary' },
  { id: 2, sname: 'Akshay', age: 20, stream: 'CS', sem: 'VI', 'coding level': 'Beginner' },
  { id: 3, sname: 'Rithvik', age: 20, stream: 'IT', sem: 'VI', 'coding level': 'Expert' },
];

// Routes for admin
router.get('/home', (req, res) => {
  res.render('admin/home', { title: 'Admin Home' });
});

router.get('/about', (req, res) => {
  res.render('admin/about', { title: 'Admin About' });
});

router.get('/contact', (req, res) => {
  res.render('admin/contact', { title: 'Admin Contact' });
});

router.get('/', (req, res) => {
  res.json(data);
});

router.get('/:id', (req, res) => {
  const student = data.find((s) => s.id == req.params.id);
  student ? res.json(student) : res.status(404).send('Student not found');
});

router.post('/', (req, res) => {
  data.push(req.body);
  res.status(201).json(data);
});

router.put('/:id', (req, res) => {
  const student = data.find((s) => s.id == req.params.id);
  if (student) {
    Object.assign(student, req.body);
    res.json(student);
  } else {
    res.status(404).send('Student not found');
  }
});

router.patch('/:id', (req, res) => {
  const student = data.find((s) => s.id == req.params.id);
  if (student) {
    Object.assign(student, req.body);
    res.json(student);
  } else {
    res.status(404).send('Student not found');
  }
});

router.delete('/:id', (req, res) => {
  const index = data.findIndex((s) => s.id == req.params.id);
  if (index !== -1) {
    data.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).send('Student not found');
  }
});

// Export the router
module.exports = router;
