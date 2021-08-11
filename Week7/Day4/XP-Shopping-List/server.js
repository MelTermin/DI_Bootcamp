const exp = require('express');
const fs= require("fs")
const app = exp();

app.use(exp.json());

app.use('/',exp.static(__dirname+'/public'))
const filepath = __dirname + '/list.json'
// console.log(filepath)

app.post('/shopping', (req, res) => {
  const {item, amount} = req.body
  
  console.log(fs.readFileSync(filepath).toString());

  const filedata = JSON.parse(fs.readFileSync(filepath).toString())

  console.log(filedata)
  filedata.push({item, amount})

  try {
    fs.writeFileSync(filepath, JSON.stringify(filedata, null, 2))

    res.send({item, amount})
  } catch(err) {
    res.send({error: err})
  }
})


app.listen(5000);
