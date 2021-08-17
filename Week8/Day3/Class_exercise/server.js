const exp = require('express');
const cors = require("cors")
const DB = require('./Modules/db');

const app = exp();

app.use(exp.json());


app.use(cors())


app.get("/countries",(req,res)=>{
     DB.countries()
     .then(data=>{
       res.send(data)
     })
     .catch(e => {
       res.send({message:e.message})
     })
  })

  app.get("/cities/:id",(req,res)=>{
    DB.cities(req.params.id)
    .then(data=>{
      res.send(data)
    })
    .catch(e => {
      res.send({message:e.message})
    })
 })





app.listen(5000);