const express = require('express')
const app = express()
const bcrypt = require('bcrypt')


//encrypting a password using bcrypt function

app.get('/',(req,res)=>{
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash("Antshant@1", salt, function(err, hash) {
            // Store hash in your password DB.
            console.log(hash)
        });
    });
})


// decrypting a password using bcrypt function

app.get('/profile',(req,res)=>{
    bcrypt.compare("Antshant@1","$2b$10$UlYETYZ4WfFqCpexswkDN.JesgeimVjJo0ONeBn27V97fo36MIMpW",function(err,result){
        console.log(result)
    })
})


app.listen(3000)