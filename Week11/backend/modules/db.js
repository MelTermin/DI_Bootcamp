const knex= require ('knex');

const db= knex( {
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    port: '5432',
    user : 'postgres',
    password : '16429798',
    database : 'Final_Project'
  }
})

const createTracker= (exercise,repetition,weight,duration) => {
  return db('tracker')
  .insert({
    exercise,
    repetition,
    weight,
    duration
  })
  .returning('*')
}

module.exports = {
 
  createTracker:createTracker
}