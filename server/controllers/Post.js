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

//get a post
exports.getPost = async(req,res) => {
  try {
      const post = await Post.findById(req.params.id)
      res.status(200).json(post)
  } catch (err) {
      res.status(500).json(err)
  }
}

//update a post
exports.updatePost =  async (req,res) => {    
  try {
      const post = await Post.findById(req.params.id)
      if (post.userId === req.body.userId ) {
          await post.updateOne({ $set: req.body })
          res.status(200).json("The post has been updated")
      } else {
          res.status(403).json("You cannot update post.")
      }
  } catch (err) {
      res.status(500).json(err)
  }    
}


//delete a post
exports.deletePost =  async (req,res) => {    
  try {
      const post = await Post.findById(req.params.id)
      if (post.userId === req.body.userId ) {
          await post.deleteOne({ $set: req.body })
          res.status(200).json("The post has been deleted.")
      } else {
          res.status(403).json("You can not delete  post.")
      }
  } catch (err) {
      res.status(500).json(err)
  }    
}

//show all posts in feed
exports.getAllPosts =  async (req,res) => {
  try{
      const allPosts = await Post.find()
          res.status(200).json(allPosts)
  } catch (err) {
      res.status(500).json(err)
  } 
}

//like or dislike a post
exports.likePost =  async (req,res) => {
  try {
      const post = await Post.findById(req.params.id)
      if (!post.likes.includes(req.body.userId)) {
          await post.updateOne({ $push: {likes: req.body.userId} })
          res.status(200).json("The post has been liked.")
      } else {
          await post.updateOne( { $pull: {likes: req.body.userId }})
          res.status(200).json("The post has been disliked.")
      }
  } catch (errr) {
      res.status(500).json(err)
  }
}


//comment on a post

// exports.commentPost =  async (req,res) => {
//   try {
//       const post = await Post.findById(req.params.id)
//       if (!post.comments.includes(req.body.userId)) {
//           await post.updateOne({ $push: {comments: {
//             commentator: req.body.userId,
//             comment: req.body.comment
//           }}})
//           res.status(200).json("The comment has been posted.")
//       } 
//   } catch (errr) {
//       res.status(500).json(err)
//   }
// }

