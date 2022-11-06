const mongoose = require("mongoose");
const tScheama = mongoose.Schema;

const todoSchema = new tScheama({
  task: { type: String, required: true },
  taskCompleted: { type: Boolean },
});

module.exports = mongoose.model("todos", todoSchema);
