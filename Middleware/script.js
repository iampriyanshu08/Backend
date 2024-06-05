const express = require('express')
const app = express()

app.use(function(req,res,next){
    console.log("middleware chala")
    next()
})
app.use(function(req,res,next){
    console.log("middleware chala 1")
    next()
})
app.use(function(req,res,next){
    console.log("middleware chala 2")
    next()
})

app.get('/',function(req,res){
    res.send("welcome to middleware")
})
app.get('/about',function(req,res){
    res.send("welcome to about page")
})
app.get('/login',function(req,res,next){
   return next(new Error('something went wrong'))
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke! we dont know what happened')
  })

app.listen(3000)
