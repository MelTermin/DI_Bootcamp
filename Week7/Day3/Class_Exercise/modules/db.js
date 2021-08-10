const knex=require("knex")

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

const getAllCountries= () => {
  return db("country")
  .select("country_id", "country");//returns a promise
}

module.exports= {
  countries:getAllCountries
}