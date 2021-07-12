let title= document.getElementsByTagName("h1")[0];
title.addEventListener("click", hello);

let titleB= document.getElementsByTagName("h1")[1];
titleB.addEventListener("click", hello);


function hello(event) {
  let element=event.target;
  element.classList.add("title");
  element.setAttribute("style","background-color:blue;")
  console.log(event.target.textContent)
}

console.log(document.body.children);
let planets = ["Mercury", "Pluto", "Mars", "Earth"];

let button=document.getElementsByTagName("button")[0];
console.log(button)
button.addEventListener("click", addPlanets);


function addPlanets(event){
  console.log(event)
  let section =  event.target.nextElementSibling;
  console.log(section)
  for (let planet of planets){
      // --> 1st for loop : planet = "Mercury";
      // --> 1st for loop : planet = "Pluto";
      let divPlanet = document.createElement("div");
      divPlanet.addEventListener("mouseover", changeClass);
      divPlanet.addEventListener("mouseout", changeClass);
      let textNode = document.createTextNode(planet);
      divPlanet.appendChild(textNode);
      section.appendChild(divPlanet);
  }
}
function changeClass(event){
  event.target.classList.toggle("title")
};

//Other exercise// //This exercise doesnt work

let input=document.forms[0].elements[0].value
let input2=document.forms[0].elements[1].value
let submit=document.forms[0].elements[2]
console.log(submit)

submit.addEventListener("click", getValue)

console.log(input, input2)

function getValue (event) {
  event.preventDefault();

}