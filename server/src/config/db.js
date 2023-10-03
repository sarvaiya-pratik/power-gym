const mongoose = require("mongoose");
const connect = async () => {
  mongoose.set("strictQuery", false);
  return mongoose.connect("mongodb://localhost:27017/newgym");
};
module.exports = connect;
