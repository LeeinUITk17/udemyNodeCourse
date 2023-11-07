// const helper = require('./helper');
// // const readline = require('readline');
// // const { sum, countEvenNumbers } = require("./helper.js"); // Import the specific functions you need

// // const rl = readline.createInterface({
// //     input: process.stdin,
// //     output: process.stdout
// // });

// // function handleUserInput() {
// //     rl.question('Enter numbers separated by spaces: ', input => {
// //         const numbers = input.split(' ').map(Number);
// //         const evenNumber = countEvenNumbers(numbers); // Use the imported function
// //         console.log('The number of even numbers is: ' + evenNumber);
// //         rl.close();
// //     });
// // }

// // handleUserInput(); // Call the function

// const total = sum(2121, 21412);
// console.log("Total:", total);
//  const http=require('http');
//  const server=http.createServer((req,res)=>{
// res.end('hello world  from nodejs');
//  });
//  server.listen(3000);

// const express=require('express');
// const app=express();
// app.get("/",(req,res)=>{
//     res.send('hey whats up from express');
// })
// app.listen(4000);

// const fs = require('fs');
// const { error } = require('console');
// const filename = "target.txt";

// fs.watch(filename, () => console.log("File changed"));

// fs.readFile(filename, (err, data) => {
//   if (err) {
//     console.error(err); // Corrected to log the error
//   } else {
//     console.log(data.toString()); // Convert the data to a string and then log it
//   }
// });
// console.log('nodejs async programing..?');

// // const data=fs.readFileSync(filename);
// // console.log(data.toString());
// const data=fs.readFileSync(filename)
// console.log9(data.toString())

const fs=require('fs');
const filename="target.txt";

fs.readFile(filename,(err,data)=>{
  if(err){
    console.log(err);
  }
  console.log(data.toString());
})
console.log('nodejs async programing...?')






