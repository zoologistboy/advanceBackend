const BlogPostModel = require("../models/blogpost");

// Create a new blog post
const addNewPost = async (req, res) => {
  try {
    const blogPost = await BlogPostModel.create(req.body) ;

    if (!blogPost) {
      return res.status(400).json({ message: "All fields are required." });
    }
    res.status(201).json({
        status: "success", 
        message: "Post created successfully",
        blogPost });

        console.log(blogPost);
        
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
    console.log(error);
    
  }
};

module.exports = addNewPost

