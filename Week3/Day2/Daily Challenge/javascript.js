let btn=document.getElementById("lib-button");
console.log(btn)

let lidDetailInputs=document.querySelectorAll("input")
console.log(lidDetailInputs)

btn.addEventListener("click", generateLib)

function generateLib(e) {
  console.log("clicked")
e.preventDefault();
 
 
  for(let i=0; i<lidDetailInputs.length;i++) {
    
    console.log(lidDetailInputs[i].value)
   let libValues=lidDetailInputs[i].value
   let createP=document.createElement("p")
   
   createP.innerText=libValues
   console.log(createP)
    let span=document.getElementById("story")
    span.appendChild(createP)
    console.log(span)
  
  }

}

//I couldnt shuffle it//