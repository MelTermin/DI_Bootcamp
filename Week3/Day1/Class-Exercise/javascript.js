//First Exercise to retrieve with property//
console.log(document.body.children);//to check the array//

console.log(document.body.children[0]);
console.log(document.body.children[1]);

console.log(document.body.firstChild);

console.log(document.body.lastElementChild);


//Second way to retrieve with method//

console.log(document.getElementById("title"));


//Appending element//

//What I wanna create//
let h2= document.createElement("h2")

//The text//
h2.textContent="New H2 ADDED";

//retrieve the element where I waant to add the h2//
let div= document.getElementById("test")
//add the element
div.appendChild(h2);


//Exercise 2 //

let container= document.getElementById("container");
console.log(container);

console.log(document.body.children[3]);

let list =document.getElementsByClassName("list");

for(let i=0; i<list.length; i++) {
  console.log(list[i].textContent)
}

console.log(document.getElementsByClassName("list")[0])

console.log(document.getElementsByClassName("list")[1])

//Change Attributes//