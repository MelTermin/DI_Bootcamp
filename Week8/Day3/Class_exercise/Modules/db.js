const knex = require('knex');

const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    port: '5432',
    user : 'postgres',
    password : '16429798',
    database : 'dvdrental'
  }
});

const getAllCountries = () => {
  return db.select('country_id','country').from('country');
}

const getAllCities = (id) => {
  return db('city').where({
  country_id:id
  }).select('city_id','city')
}

module.exports = {
  countries: getAllCountries,
  cities:getAllCities
}