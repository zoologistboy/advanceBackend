const mongoose = require("mongoose");

const blogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    // required: [true, "Enter a blog title"],
    // trim: true,
    unique: true
  },
  content: {
    type: String,
    // required: [true, "Enter blog content"],
  },
  author: {
    type: String,
    // required: [true, "Author is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const blogPost = mongoose.model("blogPost", blogPostSchema);

module.exports = blogPost;
