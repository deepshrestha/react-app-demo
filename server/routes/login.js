const router = require("express").Router()
const LoginController = require("../controllers/Login")

router.post("/register", LoginController.registerUser)
router.post("/login", LoginController.loginUser)


// router.get("/register", async (req,res) => {
//     try {
//         const user = await new User({
//                     username: "test",
//                     email: "test@gmail.com",
//                     password:"test123"
//         })

//         //save user and respond 
//         await user.save()
//         res.status(200).json(user)
//     } catch (err) {
//         res.status(500).json(err)
//     }
// })

module.exports = router