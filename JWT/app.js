const express = require('express');
const jwt = require('jsonwebtoken')
const app = express();
const cookieParser = require('cookie-parser');


app.use(cookieParser())

// Generating a jwt token string and sending with cookie
app.get('/', function(req,res){
    let token = jwt.sign({email:"test@gmail.com"}, 'secretstring')
    res.cookie("token" , token)
    res.send("done")
})



// Getting jwt token from cookie  
app.get('/read',function(req,res){
    res.send("read page open")
    console.log(req.cookies.token)
})



// Verifying jwt token with secret key 
app.get('/data',function(req,res){
    res.send("data page")
    let data = jwt.verify(req.cookies.token , "secretstring")
    console.log(data)
})


app.listen(3000)