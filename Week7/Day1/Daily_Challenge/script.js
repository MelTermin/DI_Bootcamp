//Part1//

// const { largeNumber } = require('./main')

// const b = 5

// console.log(largeNumber + b)

//Part 2//
// let http = require('http');
// const { largeNumber } = require('./main')
// const b = 5

// const server = http.createServer((req, res) => {
//     res.setHeader(200, { 'Content-Type': 'text/html' })
//     res.end(`
//     <p>My Module is: </p>
//     ${largeNumber + b}
//     <h1>Hi there at the frontend</h1>
//     `)
// })

// server.listen(3000, () => console.log('I am listening....'))

const { getDateTime } = require('./main')
const http = require('http')

const server = http.createServer((req, res) => {
    res.end(`The date and time are currently: ${getDateTime()}`)
})

server.listen(8080, () => console.log('Server running on http://localhost:8080'))
