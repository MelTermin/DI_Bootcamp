const knex = require('knex')

const db=knex ({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    port:'5432',
    user : 'postgres',
    password : '16429798',
    database : 'dvdrental'
  }
});
//select
db.select('country_id', 'country').from('country')//it is a promise
.then(data=> {
  console.log(data)// always returns array of object
})

//update//
db("city")
.where({city_id:88})
.update({city:"Bradford18"})
.returning("*")
.then(data=> {
  console.log(data)
})

//insert
db("country")
.insert({country:"lalalaland"})
.returning("*")
.then(data=> {
  console.log(data)
})
.catch (e=> {
  console.log(e)
})

//delete
db("country")
.del()
.where({country_id:111})
.returning("*")
.then(data=> {
  console.log(data)
})
.catch (e=> {
  console.log(e)
})
