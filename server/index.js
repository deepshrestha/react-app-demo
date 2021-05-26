const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config()

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false }, () => {
    console.log("Connected to MONGODB")
})

//middleware
app.use(express.json())     //body parser when you make post req, it'll parse it


app.get("/", (req, res) => {
    res.send("Welcome to homepage")
})

app.listen(8200, () => {
    console.log("Backend Server is running")
})