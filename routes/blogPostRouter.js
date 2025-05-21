const express = require("express");
const addNewPost = require("../controllers/blogController");

const blogPostRouter = express.Router();

// Routes
blogPostRouter.post("/", addNewPost);
// blogPostRouter.get("/", blogPostController.getAllPosts);
// blogPostRouter.get("/:id", blogPostController.getPostById);
// blogPostRouter.put("/:id", blogPostController.updatePost);
// blogPostRouter.delete("/:id", blogPostController.deletePost);

module.exports = blogPostRouter;
