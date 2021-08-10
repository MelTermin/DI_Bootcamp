const exp= require("express");
const app= exp();
const DB= require("./modules/db")

// DB.countries().then (data => {
//   console.log(data)
// })

app.use("/getCountries", exp.static(__dirname+ "/public"));

app.route("/getCountries")
.get((req,res)=> {
DB.countries()
.then(data=> {
  // console.log(data)
  res.send(data)
})
.catch(e => {
  res.send({message:e.message})
})
})


app.listen(3000)
