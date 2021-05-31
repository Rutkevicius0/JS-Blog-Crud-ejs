const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000;

//register view engine
app.set('view engine', 'ejs');
// nustatom views direktorija
app.set('views', 'src/views');

const blogData = require('./data/sampleBlog');
const blogs = require('./data/blogDb');

//home page
app.get('/', function (req, res) {
  //   res.sendFile(path.join(__dirname, 'pages', 'index.html'));
  //paimti index.ejs faila is views direktorijos
  res.render('index', {
    title: 'Home',
    page: 'home',
    blogData,
  });
});

//about page
app.get('/about', function (req, res) {
  //   res.sendFile(path.join(__dirname, 'pages', 'about.html'));
  res.render('about', {
    title: 'About us',
    page: 'about',
  });
});

//blog page
app.get('/blog', function (req, res) {
  //   res.sendFile(path.join(__dirname, 'pages', 'blog.html'));
  res.render('blog', {
    title: 'Blog',
    page: 'blog',
    blogs,
  });
});
//contacts page
app.get('/contacts', function (req, res) {
  //   res.sendFile(path.join(__dirname, 'pages', 'contacts.html'));
  res.render('contacts', {
    title: 'Contacts',
    page: 'contacts',
  });
});

//create blog page
app.get('/blog/create', function (req, res) {
  //   res.sendFile(path.join(__dirname, 'pages', 'blog.html'));
  res.render('createBlog', {
    title: 'Create Blog',
    page: 'createBlog',
  });
});

const staticPath = path.join(__dirname, 'static');
//statine direktorija css, js ,img ir kitiem statiniam failam
app.use(express.static(staticPath));

app.get('/api/blog', (req, res) => {
  res.json(blogs);
});

// 404 case - kai vartotojas ivede puslapi kurio nera
app.use((req, res) => res.status(404).send('OOPs, page not found'));

app.listen(PORT);
