export default class MyFetch {
  static baseUrl = '/api/blog';
  constructor(params) {}
//   static getPosts() {
//     fetch(MyFetch.baseUrl)
//       .then((res) => res.json())
//       .then((data) => console.log(data))
//       .catch((err) => console.log(err));
//   }
static async getPosts() {
    const res = await fetch(MyFetch.baseUrl);
    const data = await res.json();
    return data;
  }
}
