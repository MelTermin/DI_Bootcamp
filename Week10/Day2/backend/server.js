const express= require ('express')
const bodyParser=require ('body-parser')
const cors= require ('cors')
const env=require('dotenv')
const register = require('./controllers/register')
const login = require('./controllers/login')

const app=express()
env.config();

app.use(cors())
app.use(bodyParser.json())

app.post('/login', (req,res) => {login.handleSignIn(req,res)});
app.post('/register', (req,res)=>{register.handleRegister(req,res)});

app.listen(process.env.PORT, ()=> {
  console.log("listening on port" + process.env.PORT)
})
