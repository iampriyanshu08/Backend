import mongoose from "mongoose";
import Express from "express";
import { Todo } from "./models/todo.js";

let con = await mongoose.connect("mongodb://localhost:27017/todo");

const app = Express();
const port = 3000;

app.get("/", (req, res) => {
  const todo = new Todo({

    desc: "description of this todo",
    isDone: false,
    days : 6
  });
  todo.save();
  res.send("Hello World!");
});
app.get("/a", async(req, res) => {
  let todo = await Todo.findOne({})
  console.log(todo)
  res.json({title:todo.title, desc :todo.desc})
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
