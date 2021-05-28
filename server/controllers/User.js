const User = require("../models/User")
const bcrypt = require("bcrypt")

//get a user
exports.getUser =  async (req,res) => {
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    } catch (err) {
        res.status(500).json(err)
    }
}

//delete user
exports.deleteUser =  async (req, res) => {
    if(req.body.userId == req.params.id){
        try {
            const user = await User.findByIdAndDelete(req.params.id)
            res.status(200).json("Account has been deleted successfully.")                           
        } catch(err) {
            return res.status(500).json(error)
        }
    } else {
        return res.status(403).json("You can not delete account")
    }
}

//Update User
exports.updateUser =  async (req, res) => {
    if(req.body.userId == req.params.id){
        if(req.body.password){
            try {
                const salt = await bcrypt.genSalt(10)
                req.body.password = await bcrypt.hash(req.body.password, salt)
            } catch (error) {
                return res.status(500).json(error)
            }
        }
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body, 
            })
            res.status(200).json("Account has been updated.")
        } catch(err) {
            return res.status(500).json(error)
        }
    } else {
        return res.status(403).json("You cannot update your account")
    }
}
