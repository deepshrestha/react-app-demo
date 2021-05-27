const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const port = 8200;

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

app.use(cors());

//middleware
app.use(express.json()); //body parser when you make post req, it'll parse it

const UserRoute = require("./routes/users");

app.use("/api", UserRoute);

app.listen(port, () => {
  console.log("Backend Server is running");
});
