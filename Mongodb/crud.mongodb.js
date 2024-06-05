// CRUD operations in MongoDB 

use('crudDb')
console.log(db)

//create operation
// db.createCollection("courses")
// db.courses.insertOne({
//     name:"nodejs-course",
//     price : 0,
//     assignments : 12,
//     projects : 5

// })
// db.courses.insertMany([
//     {
//       "name": "nodejs-course",
//       "price": 5000,
//       "assignments": 12,
//       "projects": 5
//     },
//     {
//       "name": "python-course",
//       "price": 8000,
//       "assignments": 10,
//       "projects": 4
//     },
//     {
//       "name": "javascript-course",
//       "price": 5000,
//       "assignments": 11,
//       "projects": 6
//     },
//     {
//       "name": "java-course",
//       "price": 9500,
//       "assignments": 13,
//       "projects": 7
//     },
//     {
//       "name": "html-course",
//       "price": 7500,
//       "assignments": 9,
//       "projects": 3
//     },
//     {
//       "name": "css-course",
//       "price": 5000,
//       "assignments": 8,
//       "projects": 4
//     },
//     {
//       "name": "react-course",
//       "price": 11000,
//       "assignments": 14,
//       "projects": 8
//     },
//     {
//       "name": "angular-course",
//       "price": 5000,
//       "assignments": 13,
//       "projects": 7
//     },
//     {
//       "name": "vuejs-course",
//       "price": 10000,
//       "assignments": 12,
//       "projects": 6
//     },
//     {
//       "name": "typescript-course",
//       "price": 8500,
//       "assignments": 10,
//       "projects": 5
//     }
//   ])

  //Read operation

//   let a = db.courses.find({price:5000})
//   console.log(a.toArray())



//   let b = db.courses.findOne({price:5000})
//   console.log(b)

  //update operation 

//   db.courses.updateOne({price:5000}, {$set:{price:1000}})
//   db.courses.updateMany({price:10000}, {$set:{price:9000}})


//delete operation
// db.courses.deleteOne({price:9000})
// db.courses.deleteMany({price:9000})
// db.courses.deleteMany({price:{$gte:9000}})







 let a = db.courses.find({assignments:{$exists:true} } )
 console.log(a.count())
