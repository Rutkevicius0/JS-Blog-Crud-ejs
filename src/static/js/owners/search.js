console.log('laba diena');

const searchForm = document.getElementById('search-form');

searchForm.addEventListener('input', (event) => {
  event.preventDefault();
});
function searchPost(data, successCallback) {
  fetch('/api/owners/search'),
    {}
      .then((res) => res.json())
      .then((data) => successCallback(data))
      .catch((err) => console.error(err.message));
}
