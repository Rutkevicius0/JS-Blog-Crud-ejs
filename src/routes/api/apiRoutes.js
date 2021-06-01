const express = require('express');
const router = express.Router();

const blogs = require('../../data/blogDb')

router.get('/api/blog', (req, res) => {
    res.json(blogs);
  });

  router.post('/', (req, res) => {
    console.log(req.body);
    res.json({ msg: 'success',redirect:'/blog' });
  });

  module.exports = router;