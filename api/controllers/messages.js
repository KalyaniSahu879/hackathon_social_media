const express = require("express");
const router = express.Router();
const Message = require("../models/messages");

//add

router.post("/", async (req, res) => {
  try {
    const savedMessage = await Message.create(req.body);
    return res.status(200).send(savedMessage);
  } catch (err) {
    return res.status(500).send(err);
  }
});

//get

router.get("/:ChatID", async (req, res) => {
  try {
    const messages = await Message.find({
      ChatID: req.params.ChatID,
    });
    res.status(200).send(messages);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
