// const msg='lalala'
// console.log(msg)

2
const { getUser } = require('./users')

getUser().then((x) => console.log(x))