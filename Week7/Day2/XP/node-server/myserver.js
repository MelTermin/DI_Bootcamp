//Exercise 1//
// const http= require("http");
// const server=http.createServer((req,res) => {
//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   res.write('<h1>This is my first response</h1>');
//   res.write('<h2>This is my second response</h2>');
//   res.write('<p>this is my third respnse</p>');
//   res.end();
// });

// server.listen(3000);

//Exercise 2//
// const http= require("http");
// const server=http.createServer((req,res) => {
//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   const user = {
//     firstname: 'John',
//     lastname: 'Doe'
// }
// res.end(JSON.stringify(user));
// });

// server.listen(8080);

//Exercise 3//
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>This is a HTML TAG</h1>')

})

app.listen(3000)