const knex=require('knex')

module.exports = {
  db: knex({
    client:'pg',
    connection:{
      host:'127.0.0.1',
      user:'postgres',
      password:'16429798',
      database:'Project_Login'
    }
  })
}