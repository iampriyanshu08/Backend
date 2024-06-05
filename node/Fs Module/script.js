const fs = require("fs");

fs.rename("hey.txt", "hello.txt", function (err) {
  if (err) console.log(err);
  else console.log("done");
});
fs.writeFile("hey.txt", "hello kaise ho", function (err) {
  if (err) console.log(err);
  else console.log("done");
});
fs.appendFile("hey.txt", " or batao ky kr rhe ho", function (err) {
  if (err) console.log(err);
  else console.log("done");
});
fs.copyFile("hello.txt", "./copy/copy.txt", function (err) {
  if (err) console.log(err.message);
  else console.log("done");
});
fs.unlink("hello.txt", function (err) {
  if (err) console.log(err.message);
  else console.log("Removed");
});

fs.rm("./copy", { recursive: true }, function (err) {
  if (err) console.log(err);
  else console.log("Removed");
});
fs.readFile("hello.txt", "utf8", function (err, data) {
  if (err) console.log(err);
  else console.log(data);
});

fs.mkdir("./copy/co/hi.txt", { recursive: true }, function (err) {
  if (err) console.log(err);
  else console.log("folder created");
});

fs.readdir("./hey", function (err, files) {
  if (err) console.log(err);
  else console.log("\n current directory filenames: ");
  files.forEach((file) => {
    console.log(file);
  });
});
