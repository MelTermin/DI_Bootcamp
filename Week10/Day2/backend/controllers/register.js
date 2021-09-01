const bcrypt = require('bcrypt');
const db= require("../modules/db").db
console.log(db)

const handleRegister = (req,res) => {
  const {email,name,password} = req.body;
  console.log(req.body);
  if(!email || !name || !password){
    return res.status(404).json('incorrect form submission')
  }
  const hash = bcrypt.hashSync(password,10);
  console.log(hash)
  db.transaction(trx => {
    trx('login')
    .insert({
      hash:hash,
      email:email
    })
    .returning('email')
    .then(loginEmail => {
      console.log(loginEmail)
      return trx('users')
        .insert({
          email: loginEmail[0],
          name:name
        })
        .returning('*')
        .then(user => {
          res.json({user:user[0]})
        
        })
    })
    .then(trx.commit)
    .catch(e => {
      console.log(e);
      trx.rollback
    })
  })
  .catch(err => {
    console.log(err);
    res.status(404).json('unable to register')
  })
}

module.exports = {
  handleRegister
}