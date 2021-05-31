const express = require('express');
const router = express.Router();

const blogData = require('../data/sampleBlog');
const blogs = require('../data/blogDb');
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
  //   res.sendFile(path.join(__dirname, 'pages', 'blog.html'));
  res.render('blog', {
    title: 'Blog',
    page: 'blog',
    blogs,
  });
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
  //   res.sendFile(path.join(__dirname, 'pages', 'blog.html'));
  res.render('createBlog', {
    title: 'Create Blog',
    page: 'createBlog',
  });
});

module.exports = router;
