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

module.exports = router;
