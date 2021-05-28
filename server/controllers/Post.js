const Post = require("../models/Post")

// Create a post
exports.createPost = async (req, res) => {
    const newPost = new Post(req.body);
    try {
      const Post = await newPost.save();
      res.status(200).json(Post);
    } catch (err) {
      res.status(500).json(err);
    }
}