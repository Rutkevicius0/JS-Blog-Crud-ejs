const express = require('express');
const router = express.Router();

const blogControllers = require('../controllers/blogController');

const blogData = require('../data/sampleBlog');
const blogs = require('../data/blogDb');
const Post = require('../models/post');

//home page
router.get('/', blogControllers.blog_index);

//about page
router.get('/about', blogControllers.blog_about);

//blog page
router.get('/blog', blogControllers.blog_blog);
//contacts page
router.get('/contacts', blogControllers.blog_contacts);

//create blog page
router.get('/create', blogControllers.blog_create);
//add blog

//single blog page
router.get('/single/:id', blogControllers.blog_single);

//single page edit
router.get('/single/edit/:id', blogControllers.blog_edit);

module.exports = router;
