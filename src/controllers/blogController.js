const Post = require('../models/post');

const blog_index = (req, res) => {
  res.render('index', {
    title: 'Home',
    page: 'home',
  });
};

const blog_about = (req, res) => {
  res.render('about', {
    title: 'About us',
    page: 'about',
  });
};

const blog_blog = (req, res) => {
  Post.find()
    .then((result) => {
      res.render('blog/blog', {
        title: 'Blog',
        page: 'blog',
        blogs: result,
      });
    })
    .catch((err) => console.error(err.message));
};

const blog_contacts = (req, res) => {
  res.render('contacts', {
    title: 'Contacts',
    page: 'contacts',
  });
};

const blog_create = (req, res) => {
  res.render('blog/createBlog', {
    title: 'Create Blog',
    page: 'createBlog',
  });
};

const blog_single = (req, res) => {
  const blogId = req.params.id;
  Post.findById(blogId).then((result) => {
    res.render('blog/singlePage', {
      title: 'Single blog page',
      page: 'singlePage',
      post: result,
    });
  });
};

const blog_edit = (req, res) => {
  const blogId = req.params.id;
  Post.findById(blogId).then((result) => {
    res.render('blog/singlePageEdit', {
      title: 'Single blog page Edit',
      page: 'singlePageEdit',
      post: result,
    });
  });
};

module.exports = {
  blog_index,
  blog_about,
  blog_blog,
  blog_contacts,
  blog_create,
  blog_single,
  blog_edit,
};
