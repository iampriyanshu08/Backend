const express = require("express");
const path = require("path");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("index");
});
app.get("/profile/:username", function (req, res) {
  res.send(`My name is  ${req.params.username}`);
});
app.get("/author/:username/:age", function (req, res) {
  res.send(`My name is  ${req.params.username} and my age is ${req.params.age}`);
// res.send(req.params)
});

app.listen(3000, function () {
  console.log("express app is listening on localhost:3000");
});
