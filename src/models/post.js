const mongoose = require('mongoose');
// const { title } = require('process');
const Schema = mongoose.Schema;

// {
//     title: string, body:string,
// }

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

//eksportuoti naujai sukurta objekta pgal sia  schema
const Post = mongoose.model('post', postSchema);
module.exports = Post;
