import MyFetch from './class/MyFetch.class.js';

const postSection = document.querySelector('#post-section');
const postId = postSection.dataset.postId;
console.log(postId);

const deleteBtn = document.getElementById('delete');
const editBtn = document.getElementById('#edit');

const doneEdit = document.getElementById('doneEdit');

deleteBtn.addEventListener('click', function (event) {
  event.preventDefault();
  MyFetch.deletePost(postId, (ats) => {
    if (ats.redirect) {
      window.location = ats.redirect;
    }
  });
});

// doneEdit.addEventListener('click', function (event) {
//   event.preventDefault();
//   const data = {
//     title: document.getElementById('title').value,
//     author: document.getElementById('author').value,
//     body: document.getElementById('body').value,
//   };
//   console.log(data);
//   MyFetch.updatePost(postId, data, (ats) => {
//     if (ats.redirect) {
//       window.location = ats.redirect;
//     }
//   });
// });
// const editForm = document.querySelector('#edit-post-form');
// console.log(editForm);

// editForm.addEventListener('submit', function (event) {
//   event.preventDefault();

//   const efd = new FormData(editForm);

//   const efdJsonFormat = JSON.stringify(Object.fromEntries(efd));
//   console.log(efdJsonFormat);
//   MyFetch.updatePost(efdJsonFormat, (ats) => {
//     if (ats.redirect) {
//       window.location = ats.redirect;
//     }
//   });
// });
