console.log('create');

import MyFetch from './class/MyFetch.class.js';

MyFetch.getPosts()
  .then((posts) => console.log('posts posts', posts))
  .catch((err) => console.error(err.message));

// get all form data into json object
//and send it to back end via fetch

const newPostData = {
  title: 'New post about Birds',
  author: 'James Cameron',
  body: 'This is essential to know.....',
};

const jsonData = JSON.stringify(newPostData);
MyFetch.createPost(jsonData, (data) => {
  if (data.redirect) {
    console.log('redirecting to ', data.redirect);
    // window.location = data.redirect;
  }
});
