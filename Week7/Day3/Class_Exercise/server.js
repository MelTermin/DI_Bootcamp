const fs= require("fs")

// console.log(fs)

//read file
// fs.readFile("./text.txt", (err,data)=> {
//   if(err) {
//     console.log(err)
//   }else {
//     console.log(data.toString())
//   }
// })

// const data= fs.readFileSync("./text.txt")
// console.log(data.toString()) 
// line 14 & 15 will make logging text file first  and after reading file console
// console.log("after reading file") 
//it wiill be line 14 logged first because readfile is async function


//appending to a file//

// let text="melissushh";

// fs.appendFile("./text.txt", text,(err)=> {
//   if(err) {
//       console.log(err)
//     }
// })

//write to a file//
// let obj = {
//   username:"selin", //if you change the data it will overwrite it
//   password:12345
// }

// fs.writeFile("./users", JSON.stringify(obj),(err)=> {
//   if(err) {
//     console.log(err)
//      } 
// })

// COPY A FILE//

// fs.copyFile("./users", "./user2", err=> {
//    if(err) {
//  console.log(err)
//  } 
// })

//delete a file//

// fs.unlink("./text.txt", err=> {
//  if(err) {
//  console.log(err)
//  } 
// })