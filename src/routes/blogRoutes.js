const express = require('express');
const router = express.Router();

const blogControllers = require('../controllers/blogController');

//create blog page
router.get('/create', blogControllers.blog_create);
//add blog

//single blog page
router.get('/single/:id', blogControllers.blog_single);

//single page edit
router.get('/single/edit/:id', blogControllers.blog_edit);

module.exports = router;
