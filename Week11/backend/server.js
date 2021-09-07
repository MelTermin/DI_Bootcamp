const express= require ('express')
const bodyParser=require ('body-parser')
const cors= require ('cors')
const env=require('dotenv')
const DB= require('../backend/modules/db')
console.log(DB)

const app=express()
env.config();

app.use(cors())
app.use(bodyParser.json())

app.post('/tracker', (req,res)=> {
DB.createTracker(req.body.exercise,req.body.repetition,req.body.weight,req.body.duration )
.then(data => {
  console.log(data);
  res.send({message:'ok'})
})
.catch(e => {
  res.send({message:'something went wrong'})
})
})

app.delete ('/tracker/:id', (req,res) => {

  DB.deleteTracker.parseInt(req.body.id)
  .then(data => {
    console.log(data);
    res.send({message:'ok for the delete'})
  })
  .catch(e => {
    res.send({message:'something went wrong'})
  })
})


app.listen(process.env.PORT, ()=> {
  console.log("listening on port" + process.env.PORT)
})