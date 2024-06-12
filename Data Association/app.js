const express = require('express');
const app = express()
const userModel = require('./models/user')
const postModel = require('./models/post')

app.get('/', (req, res) => {
    res.send('welcome')
})
app.get('/create', async(req, res) => {
 let user = await userModel.create({
    username : "Priyanshu",
    age : 24,
    email : "priyanshu@gmail.com",
  })

  res.send(user)
})

app.get('/post/create', async (req,res)=>{
    let post = await postModel.create({
        postdata : "hello everyone",
        user: "6667e402f35241e190915d03",
    })

   let user = await  userModel.findOne({_id: "6667e402f35241e190915d03"})
   user.posts.push(post._id)
  await user.save()
   res.send({post,user})

})

app.listen(3000)