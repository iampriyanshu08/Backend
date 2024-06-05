const express = require("express");
const blog = require('./routes/blog')
const shop = require('./routes/shop')


const app = express();
const port = 3000;

app.use(express.static("public"));

app.use('/blog', blog)
app.use('/shop', shop)

app
  .get("/", (req, res) => {
    console.log("hello get");
    res.send("Hello get21!");
  })
  .post("/", (req, res) => {
    console.log("hello post");
    res.send("Hello post!");
  })
  .put("/", (req, res) => {
    console.log("hello put request");
    res.send("Hello put!");
  })
  .delete("/", (req, res) => {
    console.log("hello delete request");
    res.send("Hello delete!");
  });

app.get("/index", (req, res) => {
  console.log("hello index");
  res.sendFile("templates/index.html", { root: __dirname });
});
app.get("/api", (req, res) => {
  console.log("hello index");
  res.json({ a: 1, b: 2, c: 3,name:["ashu","vashu"] });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
