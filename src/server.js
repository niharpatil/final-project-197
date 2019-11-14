const express = require('express');
const path = require('path');

const app = express();

const db = require('../db/api');

app.use('/api', require('./server/routes/apirouter')(db));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.listen(3000, () => console.log('listening...'));
