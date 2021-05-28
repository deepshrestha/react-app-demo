const router = require("express").Router()
const UserController = require("../controllers/User")


//get a user
router.get("/:id", UserController.getUser)

//delete user
router.delete("/:id", UserController.deleteUser)

//update user
router.put("/:id", UserController.updateUser)

module.exports = router;
