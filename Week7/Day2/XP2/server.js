//Exercise 1//
// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//   const user = {
//         firstname: 'John',
//         lastname: 'Doe'
//     }
//     res.end(JSON.stringify(user));

//     console.log(user)
//     });

// app.listen(3000);


//Exercise 2//

// const express = require('express');
// const app = express();

// app.use('/', express.static(__dirname + '/public'))

// app.get('/:id', (req, res) => {
//     console.log(req.params)
//     res.send(req.params)
// })

// app.listen(3000, () => console.log('Example app listening on port 3000!'));


//Exercise 3//
const express = require('express');
const app = express();

app.use('/', express.static(__dirname + '/public'))

app.listen(3000, () => console.log('Example app listening on port 3000!'));