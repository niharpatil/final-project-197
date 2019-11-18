const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// Register body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require('../db/api');

app.use('/api', require('./server/routes/apirouter')(db));

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.listen(3000, () => console.log('listening...'));
