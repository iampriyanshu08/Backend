const express = require("express");
const path = require("path");

const app = express();

const userModel = require("./models/user");
const postModel = require("./models/post");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());
app.get("/", function (req, res) {
  res.render("index");
});
app.post("/register", async (req, res) => {
  let { email, password, username, name, age } = req.body;
  let user = await userModel.findOne({ email });
  if (user) return res.status(500).send("user already registered");

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
      let user = await userModel.create({
        email,
        username,
        age,
        name,
        password: hash,
      });
      let token = jwt.sign({ email: email, userid: user._id }, "shhhhh");
      res.cookie("token", token);
      res.send("user registered");
    });
  });
});

app.listen(3000, () => {
  console.log("express is listening on port 3000");
});
