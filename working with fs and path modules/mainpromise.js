import fs from 'fs/promises'
let a = await fs.readFile("priyanshu.txt")
let  b = await fs.appendFile("priyanshu.txt", "\n\n\n\n\n\this is amazing promise" , (e,d)=>{
    console.log(e,d)
})
console.log(a.toString(),b)