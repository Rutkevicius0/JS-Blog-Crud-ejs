const express = require('express');
const router = express.Router();

const blogControllers = require('../controllers/blogController');

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
      res.render('blog/blog', {
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
router.get('/create', function (req, res) {
  res.render('blog/createBlog', {
    title: 'Create Blog',
    page: 'createBlog',
  });
});
//add blog

//single blog page
router.get('/single/:id', function (req, res) {
  const blogId = req.params.id;
  Post.findById(blogId).then((result) => {
    res.render('blog/singlePage', {
      title: 'Single blog page',
      page: 'singlePage',
      post: result,
    });
  });
});
//single page edit
router.get('/single/edit/:id', function (req, res) {
  const blogId = req.params.id;
  Post.findById(blogId).then((result) => {
    res.render('blog/singlePageEdit', {
      title: 'Single blog page Edit',
      page: 'singlePageEdit',
      post: result,
    });
  });
});

module.exports = router;
