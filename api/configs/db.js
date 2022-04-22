const mongoose = require("mongoose");
require("dotenv").config();
module.exports = () => {
  return mongoose.connect(
    //"mongodb+srv://mohan:mongo_123@cluster0.8wdgb.mongodb.net/authentication?retryWrites=true&w=majority"
    // "mongodb+srv://shubhamNetflix:shubhamNetflix@netflixapi.yjkus.mongodb.net/netflixDatabase?retryWrites=true&w=majority"
    process.env.MONGO_ID
  );
};
