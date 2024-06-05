const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  let sitename = "Adidas";
  let searchtext = "search now";
  let arr = ["hey",2,3]
  res.render('index' , {sitename:sitename,searchtext:searchtext , arr:arr})
})
app.get('/blog/:slug', (req, res) => {
  let blogTitle = "Adidasaasdsa  sddsada";
  let blogContent = "it is a  nyc brand "
  res.render('blogpost' , {blogTitle:blogContent,blogContent:blogContent})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})