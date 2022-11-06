const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/toDo");
    console.log("Db connected Successfully");
  } catch (e) {
    console.log("error", e);
  }
};

module.exports = connectDb;
