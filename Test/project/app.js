 // app.js

const express = require('express');
const app = express();
const path = require('path');

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Root route
app.get('/', (req, res) => {
  res.render('index', { title: 'Home Page' }); // Pass 'title' to the view
});

// Add your routers here
const adminRouter = require('./routers/adminRouter');
const facultyRouter = require('./routers/facultyRouter');
const studentRouter = require('./routers/studentRouter');

// Use the routers for specific paths
app.use('/admin', adminRouter);
app.use('/faculty', facultyRouter);
app.use('/student', studentRouter);



 
// Start the server
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
