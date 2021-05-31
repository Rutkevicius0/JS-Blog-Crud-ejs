const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000;

pagesRoutes = require('./routes/pagesRoute')

//register view engine
app.set('view engine', 'ejs');
// nustatom views direktorija
app.set('views', 'src/views');

app.use('/',pagesRoutes);

const staticPath = path.join(__dirname, 'static');
//statine direktorija css, js ,img ir kitiem statiniam failam
app.use(express.static(staticPath));

app.get('/api/blog', (req, res) => {
  res.json(blogs);
});

// 404 case - kai vartotojas ivede puslapi kurio nera
app.use((req, res) => res.status(404).send('OOPs, page not found'));

app.listen(PORT);
