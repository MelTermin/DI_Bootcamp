// const http=require('http');
// const server= http.createServer( (request, response)=> {
//   // console.log("I am listening")
//   // response.end("<h1>Hello</h1")
//   const user ={
//     user:'dan',
//     username:'jjjsjds'

   
//   }

//   response.end(JSON.stringify(user))
// })

// server.listen(3000)

const exp=require("express")

const app= exp();
app.get("/shop", (req,res)=> {
  res.send("hello from express")
})

app.get("/b", (req,res)=> {
  let obj= {
    user:'rina',
    dude:'dude'
  }
  res.send(obj)
})

app.listen(3000)