const express = require('express')
const app = express()

//creating routes

app.get('/', function(req,res){
    res.send("Hello Priyanshu  welcome to  Homepage")
})
app.get('/profile', function(req,res){
    res.send("Hello Priyanshu welcome to profile page")
})
app.get('/login',function(req,res){
    res.send("Hello Priyanshu welcome to login page")
})

app.listen(3000)