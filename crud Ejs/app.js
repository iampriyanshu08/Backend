const express = require("express");
const path = require("path"); 
const app = express();
const userModel = require("./models/user"); // usermodels from models folder
const user = require("./models/user");

app.set("view engine", "ejs");  //setting view engine as ejs
app.use(express.json());   // for handling forms submissions
app.use(express.urlencoded({ extended: true })); 
app.use(express.static(path.join(__dirname, "public")));  // for serving static files


app.get("/", (req, res) => {
  res.render("index");
});


app.get("/read", async (req, res) => {
  let users = await userModel.find();
  res.render("read", { users });
});


app.get("/edit/:userid", async (req, res) => {
  let user = await userModel.findOne({ _id: req.params.userid });
  res.render("edit", { user });
});


app.post("/update/:userid", async (req, res) => {
  let { image, name, email } = req.body;
  let user = await userModel.findOneAndUpdate(
    { _id: req.params.userid },
    { image, email, name },
    { new: true }
  );
  res.redirect("/read");
});


app.get("/delete/:id", async (req, res) => {
  let deletedUser = await userModel.findOneAndDelete({ _id: req.params.id });
  res.redirect("/read");
});


app.post("/create", async (req, res) => {
  let { name, email, image } = req.body;
  let createdUser = await userModel.create({
    name,
    email,
    image,
  });

  res.redirect("/read");
});



app.listen(3000);
