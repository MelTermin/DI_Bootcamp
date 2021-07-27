// let value="melissa";


// let object= new Promise(function(resolve,reject){
//  setTimeout(()=> {
//    if(typeof value==="string") {
//      console.log("after 5 seconds")
//      resolve("this is a string")
//    } else {
//      reject("this is not a string")
//    }

//  },5000);
// })


// let promiseA=object.then(message=>message.toUpperCase()).catch(error=>console.log(error));
// console.log(promiseA)


let mainFunction = (item) => {
  let firstPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
          if (typeof item == "string") {
              resolve(item.toUpperCase())
          } else{
              reject(item)
          }
      }, 5000);
  })
  .then(upperCaseString => console.log(upperCaseString.repeat(2)))
  .catch(error => console.log(error))
  .finally(() => console.log("congratulation"))

  return firstPromise;
}   
mainFunction("hello")
// mainFunction(4)

// const btn=document.getElementById("btn");
// btn.addEventListener("click", displayGif);

let container = document.querySelector(".gif-container");


let url=`https://api.giphy.com/v1/gifs/random?tag=sun&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`

fetch(url)
 .then((response) => response.json())
 .then((data) => {
console.log(data)

let source = data["data"]["image_url"];


let image = document.createElement("img");
image.setAttribute("src", source);
console.log(image)


container.append(image)
 })


 //Second exercise//


 let anotherUrl=`http://random-word-api.herokuapp.com/word?number=1`
//  console.log(anotherUrl)


 fetch(anotherUrl)
 .then((response) => response.json())
 .then((data) => {
console.log(data)

const p=document.createElement("p")
p.innerText=data
let variable=p.innerText
console.log(variable)
})


