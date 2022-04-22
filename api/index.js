require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
const connect = require("./configs/db");
var cors = require("cors");

app.use(cors());
const Chat = require("./controllers/Chat");
const Message = require("./controllers/messages");
const user = require("./controllers/user");

app.use("/api/chat", Chat);
app.use("/api/message", Message);
app.use("/api/user", user);

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  try {
    await connect();
    console.log(`Server is running on ${PORT}`);
  } catch (err) {
    console.log(err);
  }
});
