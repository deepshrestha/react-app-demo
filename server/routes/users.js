const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const UserController = require("../controllers/User");

router.get("/users", UserController.getUsersList);
router.post("/user/add", UserController.addNewUser);

module.exports = router;
