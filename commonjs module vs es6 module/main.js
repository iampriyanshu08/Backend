// import {a,b,c} from './mymodule.js'
// import ashu from './mymodule.js'

// console.log(a,b,c);
// console.log(ashu)// default export 


// function (modules,exports,require,filename ,dirname){
//     module code  lives here
// }

const a = require ('./mymodule2.js')
console.log(a,__filename,__dirname)
