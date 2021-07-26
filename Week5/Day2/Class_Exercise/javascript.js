
//to create xmlobject

let display=document.getElementById("result");
console.log(display)


let xhr= new XMLHttpRequest();
console.log(xhr)

xhr.open("GET", "https://jsonplaceholder.typicode.com/users")
xhr.send();


xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
  	console.log("xhr object = ", xhr)
    // request complete
    console.log("request complete")
    if (xhr.status != 200) { // analyze HTTP status of the response
    	//DISPLAY ERROR HERE
  	} else if (xhr.status === 200) {
  		//DISPLAY USERS HERE
      let javascriptObject=JSON.parse(xhr.response)
      console.log(javascriptObject)
      displayUsers(javascriptObject)
  	}
  }
};

function displayUsers (javascriptObject) {
  for(let i =0; i<javascriptObject.length; i++) {
    console.log(javascriptObject)

    let resultsofUser= document.createElement("div")
    resultsofUser.classList.add("list-user")

    let name=document.createElement("p")
    name.innerHTML=javascriptObject[i]["name"]


    let email=document.createElement("p")
    email.innerHTML=javascriptObject[i]["email"]

    let address=document.createElement("p")
    address.innerHTML=javascriptObject[i]["address"]["city"]
    
    display.append(resultsofUser)
    resultsofUser.append(name,email,address)
   
  }

}