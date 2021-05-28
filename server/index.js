const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan") 
const port = 8200;
const UserRoute = require("./routes/users");
const LoginRoute = require("./routes/login")
const PostRoute = require("./routes/posts")

dotenv.config();

mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  () => {
    console.log("Connected to MONGODB");
  }
);

//middleware
app.use(express.json()); //body parser when you make post req, it'll parse it
app.use(morgan("common"))
app.use(cors());


app.get("/", (req, res) => {
  res.send("Welcome to homepage")
})

app.use("/api" , LoginRoute)
app.use("/api/users", UserRoute);
app.use("/api/posts", PostRoute)

app.listen(port, () => {
  console.log("Backend Server is running");
});
