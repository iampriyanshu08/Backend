const express = require("express");
const app = express();
const userModel = require("./usermodel");

app.get("/", function (req, res) {
  res.send("welcome to the express app");
});



app.get("/create", async (req, res) => {
  let createUser = await userModel.create({
    pass: "hey12345",
    username: "Ashu",
    email: "ashu@gmail.com",
    name: "Ashu",
  });
  res.send(createUser);
});



app.get("/update", async (req, res) => {
  let updatedUser = await userModel.findOneAndUpdate(
    { username: "Ashu" },
    {
      name: "Priyanshu Utsahi",
      email: "priyanshu@gmail.com",
      username: "Priyanshu utsahi",
      pass: "iamastar@12345",
    },
    { new: true }
  );
  res.send(updatedUser);
});



app.get("/read", async (req, res) => {
  let readUser = await userModel.find({
    username: "Ashu",
  });

  res.send(readUser);
});



app.get("/delete", async (req, res) => {
  let readUser = await userModel.findOneAndDelete({
    username: "Ashu",
  });

  res.send(readUser);
});

app.listen(3000);
