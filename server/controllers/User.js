const UsersData = require("../models/User");

exports.getUsersList = (req, res) => {
  UsersData.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.json(result);
  });
};

exports.addNewUser = (req, res) => {
  let data = req.body;
  usersData.create(data, (err) => {
    if (err) {
      throw new Error(err);
    }
    res.json("Data inserted successfully.");
  });
};
