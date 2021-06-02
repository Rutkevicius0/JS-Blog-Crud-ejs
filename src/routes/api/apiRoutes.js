const express = require('express');
const router = express.Router();

const blogs = require('../../data/blogDb');
const Post = require('../../models/post');

router.get('/api/blog', (req, res) => {
  res.json(blogs);
});

router.post('/', (req, res) => {
  console.log(req.body);
  const newPost = new Post({
    title: req.body.title,
    author: req.body.author,
    body: req.body.body,
  });
  //issaugoti duoemnubazeje
  newPost
    .save()
    .then((result) => res.send({ redirect: '/blog' }))
    .catch((err) => console.error(err.message));
});

module.exports = router;
