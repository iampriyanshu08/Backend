const { error } = require('console');
const fs = require('fs');
// const fs = require('fs/promises')
// console.log(fs)
console.log("staring")
// fs.writeFileSync("ashu.txt", "ashu is a good boy")



fs.writeFile("priyanshu.txt", "priyanshu is a good boy" ,()=>{
    console.log("done writing")
    fs.readFile("priyanshu.txt",(error ,data)=>{
        console.log(error,data.toString())
    })
})

fs.appendFile("priyanshu.txt", "hey priyanshu how are you", (err,data)=>{
console.log(err,data)
})
console.log("ending")