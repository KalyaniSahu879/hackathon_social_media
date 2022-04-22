const express = require("express");
const router = express.Router();
const Chat = require("../models/Chat");

//new conv

router.post("/", async (req, res) => {
  try {
    const chat = await Chat.create({
      members: [req.body.senderId, req.body.receiverId],
    });
    return res.status(201).send(chat);
  } catch (err) {
    return res.status(500).send(err);
  }
});

//get conv of a user

router.get("/:userId", async (req, res) => {
  try {
    const chat = await Chat.find({
      members: { $in: [req.params.userId] },
    })
      .populate({ path: "members" })
      .populate({ path: "members" })
      .lean()
      .exec();
    return res.status(200).send(chat);
  } catch (err) {
    return res.status(500).send(err);
  }
});

// get conv includes two userId

router.get("/find/:firstUserId/:secondUserId", async (req, res) => {
  try {
    const chat = await Chat.findOne({
      members: { $all: [req.params.firstUserId, req.params.secondUserId] },
    })
      .populate({ path: "senderId" })
      .populate({ path: "receiverId" })
      .lean()
      .exec();
    res.status(200).send(chat);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
