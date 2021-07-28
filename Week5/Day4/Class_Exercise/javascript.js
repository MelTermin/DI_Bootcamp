// const famousPerson =(string1,string2) =>{
 
//   let result= new Promise((resolve,reject) => {
//     if(typeof string1==="string" && typeof string2==="string"){
//       resolve ([string1,string2])
//     } else {
//       reject("they are not string")
//     }
//   })
//   return result
// }


// const noun= (string3)=> {
//   let result= new Promise((resolve,reject) => {
//     if(string3.length<3){
//       resolve(console.log(string3))
//     }else {
//       reject("less then three characthers")
//     }
//   })
//   return result
// }

// const city= (string4)=> {
//   let result= new Promise((resolve,reject) => {
// if(string4[0].upperCase()){
// resolve(string4[0].upperCase)
// }else {
// reject("does not start with capital letter")
// }
//   })
//   return result
// }

// const verb= (string5)=> {
//   let result= new Promise((resolve,reject) => {
// if(string5.endsWith("ing")){
// resolve(string5)
// }else {
//   reject("this word is does not end with ing")
// }
//   })
//   return result
// }


// const sentence = async()=> {
//   let names=await famousPerson("Beyonce", "Pink");
//   let nouns=await noun("table")
//   let citys= await city("Paris");
//   let verbs= await verb("sleeping")
//   console.log(`${names[0]} is ${verbs} ${nouns} with ${names[1]} in ${citys}`);
  
// }

// sentence();

let btn= document.getElementById("btn");

btn.addEventListener("click", nameHandler)
let url = "http://random-word-api.herokuapp.com/word?number=1"

let result1=document.getElementById("result")
console.log(result1)


async function nameHandler() {
  try {
  
  let fetched=await fetch(url)
  if(fetched.status===200){
  let response=await fetched.json()
  console.log(response)
  randomGifs(response)
  
}else {
  throw new Error("not 200")
}
}catch(err) {
  console.log("The error is", err)
}
}

async function randomGifs (x) {
let gif= await fetch('https://api.giphy.com/v1/gifs/random?tag=' +x+'&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My')
console.log(gif)


if (gif.status == 200) {
  let response = await gif.json()
  console.log(response)
  let res = await response.data
  console.log(res)
  printGif(res,x)
  // return response 
} else{
  throw new Error('not 200 status')
}
}


function printGif(x) {
  console.log(x.embed_url)
let image= document.createElement("img")
image.setAttribute('src', x.embed_url)
console.log(image)

result1.append(image)
}




