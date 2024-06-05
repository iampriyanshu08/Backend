/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use("mydatabase");

// Insert a few documents into the courses collection.
db.getCollection("courses").insertMany([
  {
    name: "product1",
    price: 100,
    platform: "youtube",
  },
  {
    name: "product2",
    price: 200,
    platform: "youtube",
  },
  {
    name: "product3",
    price: 300,
    platform: "youtube",
  },
  {
    name: "product4",
    price: 400,
    platform: "youtube",
  },
  {
    name: "product5",
    price: 500,
    platform: "youtube",
  },
  {
    name: "product6",
    price: 600,
    platform: "youtube",
  },
  {
    name: "product7",
    price: 700,
    platform: "youtube",
  },
  {
    name: "product8",
    price: 800,
    platform: "youtube",
  },
  {
    name: "product9",
    price: 900,
    platform: "youtube",
  },
  {
    name: "product10",
    price: 1000,
    platform: "youtube",
  },
]);



// Print a message to the output window.
console.log(`Done inserting data `);

