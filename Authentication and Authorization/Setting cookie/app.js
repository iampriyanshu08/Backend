const cookieParser = require("cookie-parser");
const express = require("express");

const app = express();

app.use(cookieParser());
app.get("/", (req, res) => {
  res.cookie("name", "priyanshu");
  res.send("done");
});
app.get("/profile", (req, res) => {
  console.log(req.cookies);
  res.send("welcome to profile page");
});

app.listen(3000);
