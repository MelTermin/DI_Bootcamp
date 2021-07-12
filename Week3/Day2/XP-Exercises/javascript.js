//Exercise 1//

let lastparag=document.getElementsByTagName("p")[3].remove()

let h2= document.getElementsByTagName("h2")[0]
console.log(h2)

h2.addEventListener("click", changeColor);

function changeColor() {
h2.style.backgroundColor="aqua"
}


let h1=document.getElementsByTagName("h1")[0].style.fontSize="40px"
console.log(h1);

let h3=document.getElementsByTagName("h3")[0];
console.log(h3);

h3.addEventListener("click", getDisplay);

function getDisplay(event) {
console.log(h3.getAttribute("display"))
}

let btn= document.getElementsByTagName("button")[0];
console.log(btn)
btn.addEventListener("click",changeToBold);

function changeToBold () {
  console.log("clicked")
  let allParag=document.getElementsByTagName("p")
  console.log(allParag);

  for(let i=0; i<allParag.length; i++) {
    
   allParag[i].style.fontSize="20px"
  }
 
}

let formDetails= document.getElementById("submit")
console.log(formDetails)

formDetails.addEventListener("click", submitForm);

function submitForm (event) {
  event.preventDefault()
  console.log("clicked");
  let firstNameInput= document.getElementById("fname").value
  console.log(firstNameInput)

  let lastNameInput= document.getElementById("lname").value;
  console.log(lastNameInput)

  let div= document.getElementsByClassName("usersAnswer")[0];
  console.log(div)
  let userAnswersParag= document.createElement("p");
  let userAnswer2=document.createElement("p");
  userAnswersParag.innerText=firstNameInput
  userAnswer2.innerText=lastNameInput
  console.log(userAnswersParag)
  console.log(userAnswer2)

 div.append(userAnswersParag)
 div.append(userAnswer2)

  if(firstNameInput=="" && lastNameInput==""){
    alert("Inputs can not be empty")
  } 
}

//Exercise 2//

let collectBoldParag= document.querySelectorAll("strong")
console.log(collectBoldParag)


function getBold_items () {
  
  console.log(collectBoldParag)
}

getBold_items ();

function highlight () {
  
 for(let i=0; i<collectBoldParag.length; i++) {
  collectBoldParag[i].style.color="blue"

 }
 
}


highlight ();



function return_normal() {

  for(let i=0; i<collectBoldParag.length; i++) {
    collectBoldParag[i].style.color="black"
   }
}

return_normal();
//mouseover listeners does not work//
// collectBoldParag.addEventListener("mouserover", highlight)
// collectBoldParag.addEventListener("mouserover", return_normal)

//Exercise 3//

let sphereform = document.getElementById('MyForm')
sphereform.addEventListener('submit', handleSubmit)

function handleSubmit (e) {
    e.preventDefault()

   
    const [{ value: radius }, volume] = e.target.querySelectorAll('input')

    volume.value = (4 / 3) * Math.PI * radius ** 3
}

