console.log('create');

import MyFetch from './class/MyFetch.class.js';

// MyFetch.getPosts()
//   .then((posts) => console.log('posts', posts))
//   .catch((err) => console.error(err.message));

// get all form data into json object
//and send it to back end via fetch

// const newPostData = {
//   title: document.getElementById('title').value,
//   author: document.getElementById('author').value,
//   body: document.getElementById('body').value,
// };

// const jsonData = JSON.stringify(newPostData);
// MyFetch.createPost(jsonData, (data) => {
//   if (data.redirect) {
//     console.log('redirecting to ', data.redirect);
//     // window.location = data.redirect;
//   }
// });

const mainForm = document.getElementById('create-post-form');

mainForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const fd = new FormData(mainForm);

  const fdJsonFormat = JSON.stringify(Object.fromEntries(fd));
  console.log(fdJsonFormat);
  MyFetch.createPost(fdJsonFormat, (ats) => {
    if (ats.redirect) {
      window.location = ats.redirect;
    }
  });
});
