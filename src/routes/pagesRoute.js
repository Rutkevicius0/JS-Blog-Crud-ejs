const express = require('express');
const router = express.Router();

const blogData = require('../data/sampleBlog');
const blogs = require('../data/blogDb');
const Post = require('../models/post');
//home page
router.get('/', function (req, res) {
  //   res.sendFile(path.join(__dirname, 'pages', 'index.html'));
  //paimti index.ejs faila is views direktorijos
  res.render('index', {
    title: 'Home',
    page: 'home',
    blogData,
  });
});

//about page
router.get('/about', function (req, res) {
  //   res.sendFile(path.join(__dirname, 'pages', 'about.html'));
  res.render('about', {
    title: 'About us',
    page: 'about',
  });
});

//blog page
router.get('/blog', function (req, res) {
  Post.find()
    .then((result) => {
      res.render('blog', {
        title: 'Blog',
        page: 'blog',
        blogs: result,
      });
    })
    .catch((err) => console.error(err.message));
});
//contacts page
router.get('/contacts', function (req, res) {
  //   res.sendFile(path.join(__dirname, 'pages', 'contacts.html'));
  res.render('contacts', {
    title: 'Contacts',
    page: 'contacts',
  });
});

//create blog page
router.get('/blog/create', function (req, res) {
  res.render('createBlog', {
    title: 'Create Blog',
    page: 'createBlog',
  });
});
//add blog

//single blog page
router.get('/single/:id', function (req, res) {
  const blogId = req.params.id;
  const found = blogs.find((p) => p.id === +blogId);
  console.log(found);
  res.render('singlePage', {
    title: 'Single blog page',
    page: 'singlePage',
    post: found,
  });
});

module.exports = router;
