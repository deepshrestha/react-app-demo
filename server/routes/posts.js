const router = require("express").Router()
const PostController = require("../controllers/Post")

router.post("/create", PostController.createPost)
router.get("/:id", PostController.getPost )
router.put("/:id", PostController.updatePost)
router.delete("/:id", PostController.deletePost)
router.get("/feed/all", PostController.getAllPosts)
router.put("/:id/like", PostController.likePost)
router.put("/:id/comment", PostController.commentPost)

module.exports = router