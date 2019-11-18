const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// Register body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set 'public' to be a static directory
app.use(express.static(path.join(__dirname, '..', 'public')));

// Connect to the database
require('../db/dbconnect');

// Load the api router onto app
app.use('/api', require('./server/routes/apirouter'));

// Any non-api routes should be sent the html file as a response
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.listen(3000, () => console.log('listening...'));
