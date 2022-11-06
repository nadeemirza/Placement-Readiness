const express = require("express");
const app = express();
const port = 8000;
const bodyParser = require("body-parser");
const connectDB = require("./Connection/connection");
const userDB = require("./Model/userRegistratrion");
connectDB();
app.use(bodyParser());
app.get("/", (req, res) => {
  res.send("Todo");
});
app.post("/api/toDo/register", async (req, res) => {
  try {
    const { email } = req.body;
    let user = await userDB.find({ email });
    if (user) {
      res.status.send({ message: "User Already Registered" });
    } else {
      let user = userDB.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      res.send({ message: "Successfully Registered" });
      res.send(user);
    }
  } catch {
    res.send.apply({
      status: "501",
      message: "Internal Sever error",
    });
  }
});
app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
