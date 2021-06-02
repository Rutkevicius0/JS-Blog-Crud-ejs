const express = require('express');
const router = express.Router();

const blogs = require('../../data/blogDb');
const { updateOne } = require('../../models/post');
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

router.delete('/:id', (req, res) => {
  Post.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.send({ msg: 'success', redirect: '/blog' });
    })
    .catch((err) => console.log(err));
});

router.put('/:id', (req, res) => {
  const { title, author, body } = req.body;
  Post.findByIdAndUpdate(req.params.id, req.body)
    .then((result) => {
      res.json({ msg: 'success', redirect: '/blog' });
    })
    .catch((err) => console.log(err));
});

module.exports = router;
