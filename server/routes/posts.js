const router = require("express").Router()
const PostController = require("../controllers/Post")

router.post("/create", PostController.createPost)

module.exports = router