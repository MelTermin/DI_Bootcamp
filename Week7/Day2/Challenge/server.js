const express = require('express')
const app = express()

const bodyParser= require("body-parser")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/',express.static(__dirname+'/public'))
app.use('/picture',express.static(__dirname+'/public/picture.html'))
app.use('/form',express.static(__dirname+'/public/form.html'))

app.get('/aboutMe/:hobby', (req, res) => {
  let regex = /^[a-z]+$/;
  if (regex.test(req.params.hobby) == false) {
      res.statusCode = 404;
      res.send('404: Page not found')
  }

  res.send('Your hobby is ' + req.params.hobby)
})

app.post('/formdata', function (req, res) {
  console.log(req.body)
  let response = req.body;
  res.send(`${response.email} sent you a message from ${response.message}`)
})

app.listen(3000)