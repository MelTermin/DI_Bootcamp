// console.log("heloooo 2")

// console.log("melissa")

// const http= require("http");
// const server=http.createServer((request,response) => {
// console.log("headers",request.headers)
// console.log(request.method)
// console.log(request.url)
// response.setHeader("content-Type", "text/html");
// response.end("<h1>Hellooooo</h1");
// })

// server.listen(3000)

// firtst way doing it//
// const http= require("http");
// const server=http.createServer((request,response) => {
// // console.log("headers",request.headers)
// console.log(request.method)
// console.log(request.url)
// const user= {
//   name:'John',
//   hobby:'knitting'
// }
// response.setHeader("content-Type", "application/json");
// response.end(JSON.stringify(user));
// })

// server.listen(3000)


//second way of doing it//

const express=require("express")

const app= express();
app.get("/", (req,res)=> {
  // res.send("helloooooo meloş")
  // res.send("<h1>helloooooo meloş</h1")
  const user= {
      name:'John',
      hobby:'knitting'
    }
    res.send(user)
})
app.listen(3000)