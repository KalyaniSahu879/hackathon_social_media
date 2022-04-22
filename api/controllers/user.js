const express = require("express");
const router = express.Router();
const User = require("../models/user");

//add

router.post("/", async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    return res.status(201).send(newUser);
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const newUser = await User.find().lean().exec();
    return res.status(201).send(newUser);
  } catch (err) {
    return res.status(500).send(err);
  }
});
module.exports = router;
