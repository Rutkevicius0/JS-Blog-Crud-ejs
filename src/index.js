const express = require('express');
const app = express();

const PORT = 3000;

const kint = 'blue';

app.get('/', function (req, res) {
  res.send('Hello World');
});

// 404 case - kai vartotojas ivede puslapi kurio nera
app.use((req, res) => res.status(404).send('OOPs, page not found'));

app.listen(PORT);
