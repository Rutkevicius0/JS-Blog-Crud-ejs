const express = require('express');

const app = express();
const path = require('path');

const PORT = 3000;

const mongoose = require('mongoose');
const { mongoDbString } = require('./config/config');
mongoose
  .connect(mongoDbString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    console.log('connected to Mongooose');
    app.listen(PORT);
  })
  .catch((err) => console.log(err));

//pages routes
const pagesRoutes = require('./routes/pagesRoute');
const apiRoutes = require('./routes/api/apiRoutes');
const blogRoutes = require('./routes/blogRoutes');
const ownersRoutes = require('./routes/ownersRoutes');
//const router = require('./routes/pagesRoute');

//register view engine
app.set('view engine', 'ejs');
// nustatom views direktorija
app.set('views', 'src/views');
//for req.body to work
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', pagesRoutes);

app.use('/owners', ownersRoutes);
app.use('/blog', blogRoutes);
app.use('/api/blog', apiRoutes);

const staticPath = path.join(__dirname, 'static');
//statine direktorija css, js ,img ir kitiem statiniam failam
app.use(express.static(staticPath));

// 404 case - kai vartotojas ivede puslapi kurio nera
app.use((req, res) => res.status(404).send('OOPs, page not found'));
