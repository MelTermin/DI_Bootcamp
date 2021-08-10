//first exercise//

const fs= require("fs")
// console.log(fs)

// fs.readFile("./text.txt", (err,data)=> {
//   if(err) {
//     console.log(err)
//   }else {
//     console.log(data.toString())
//   }
// })


//second exercise//
let newContent = "Caesar Salad"
fs.appendFile('./text.txt', newContent, (err)=> {
  if (err) {
      console.error(err)
      return
  }
});

fs.readFile("./text.txt", (err,data)=> {
  if(err) {
    console.log(err)
  }else {
    console.log(data.toString())
  }
})

//to delete

fs.unlink("./text.txt", err=> {
 if(err) {
 console.log(err)
 } 
})

