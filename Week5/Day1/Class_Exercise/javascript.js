//Client & Server difference

// client is the computer-tablets phones

// server is a computer that serves information to other computers. Server needs to send back the request that client that can understand 


//URL => A TOOL TO FIND WEBPAGES USING WEB BROWSER

//unique  IP address

//that is why we created domain names so we dont have to remember list of numbers of IP address

// https://wwww.marvel.com/charachers => is path a folder structure httpp is protocol


// retrieve stuff for get method

// post to create
//update, delete methods are also existing

// GET METHOD
//=>


let signUp=document.forms[0]
console.log(signUp)

let userName=document.getElementById("username")
console.log(userName)

let password=document.getElementById("password")

signUp.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("test")
  console.log(userName.value)
  console.log(password.value)


  if(userName.value.length<4 && password.value.length<4) {
    alert("it must be at least 4 characthers")
   
  }else {
    const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
console.log(params)


for (const [key, value] of Object.entries(params)) {
	let result=document.createElement("div")
let userAnswer=document.createElement("p")
userAnswer.innerText=`${key}: ${value}`;


console.log(userAnswer)
result.append(userAnswer)

signUp.append(result)


}


  }
})



