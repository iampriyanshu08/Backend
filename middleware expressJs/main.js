const express = require("express");
const app = express();
const port = 3000;
const blog = require('./routes/blog')
const fs = require("fs")

// app.use(express.static("public"));


app.use('/blog', blog)


//middleware 1
app.use((req, res, next) => {  
    console.log(req.headers)
    req.ashu= "iam ashu"
    fs.appendFileSync("logs.txt",`${Date.now()} is a ${req.method}\n` )
  console.log(`${Date.now()} is a ${req.method}`);
//   res.send("hacked by middleware 1")
  next();
});
//middleware 2
app.use((req, res, next) => {  
    req.ashu= "iam vashu"
  console.log("m2");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/about", (req, res) => {
  res.send("Hello about!");
});
app.get("/contact", (req, res) => {
  res.send("Hello contact!" + req.ashu) ;
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
