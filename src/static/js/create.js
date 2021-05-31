console.log('create blog');

import MyFetch from './class/MyFetch.class.js';

MyFetch.getPosts()
  .then((posts) => {
    console.log(posts);
  })
  .catch((err) => console.log(err));
console.log('posts', posts);
