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

// const express=require("express")

// const app= express();
// app.get("/", (req,res)=> {
//   // res.send("helloooooo meloş")
//   // res.send("<h1>helloooooo meloş</h1")
//   const user= {
//       name:'John',
//       hobby:'knitting'
//     }
//     res.send(user)
// })
// app.listen(3000)

//To write multiple lines//
// const express=require("express")

// const app= express();
// app.get("/", (req,res)=> {
//   res.write ("<h1>helloooooo </h1")
//   res.write ("<h2>melissa</h2")
//   res.end()
// })

// app.listen(3000)

//Middleware + sending form data input values//
const express=require("express")
const app= express();

console.log(__dirname+'/public')

app.use('/',express.static(__dirname+'/public'))

//GET REQUEST//
// app.get("/login", (req,res)=> {
//   // console.log(req.query)
//   //using desconstructing//
//   const {username,password}= req.query
//   res.send (`<h1>helloooooo ${username}</h1`)

// })

//POST REQUEST//
const bodyParser= require("body-parser")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// app.post("/login", (req,res)=> {
//   console.log(req.query)
//   const {username,password}= req.body
//   res.send (`<h1>helloooooo ${username} ${password}</h1`)
// })




//fetch request with post//
//this is not working somehow//

app.post("/login", (req,res)=> {
  console.log(req.body)
  const {username,password}= req.body
  res.send ({
    message:'post okay'
  })
})


app.listen(3000)
