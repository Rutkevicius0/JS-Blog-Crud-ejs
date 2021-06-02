import MyFetch from './class/MyFetch.class.js';

const editForm = document.querySelector('#edit-post-form');
console.log(editForm);
const postId = editForm.dataset.postId;
console.log(postId);

editForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const efd = new FormData(editForm);

  const efdJsonFormat = JSON.stringify(Object.fromEntries(efd));
  console.log(efdJsonFormat);
  MyFetch.updatePost(efdJsonFormat, postId, (ats) => {
    if (ats.redirect) {
      window.location = ats.redirect;
    }
  });
});
