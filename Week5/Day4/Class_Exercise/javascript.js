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


let url = "http://random-word-api.herokuapp.com/word?number=1"
async function requestGif () {
  let fetched=await fetch(url)
  let response=await fetched.json()
  console.log(response)


let fetchedUser=await fetch("https://api.giphy.com/v1/gifs/random?tag=sun&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My")
}

requestGif ()