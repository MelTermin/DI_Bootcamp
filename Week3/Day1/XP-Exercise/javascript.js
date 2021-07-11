//Exercise-1//

let x= document.getElementById("navBar");
console.log(x);


x.setAttribute("id","socialNetworkNavigation");

//creating li//
let y= document.createElement("li");
let textNode=document.createTextNode("Logout")


y.appendChild(textNode)


let ul=x.querySelector("ul");
ul.appendChild(y)

//Bonus//

let firstChild=ul.firstElementChild;
let lastChild= ul.lastElementChild;

console.log(firstChild,lastChild);

//Exercise 2//

console.log(document.body.children);

let ulTag = document.getElementsByClassName("list");
console.log(ulTag)

document.body.children[2].firstElementChild.innerText="Melissa";
document.body.children[3].firstElementChild.innerText="Melissa";
document.body.children[2].lastElementChild.innerText="Richard";

for (let i=0; i<ulTag.length; i++) {
  let newLiTag= document.createElement("li");
  console.log(newLiTag)
  newLiTag.textContent="Hey Students";
//Couldnt append it//
 
}


ulTag[1].children[1].remove()


//Exercise 3 //

console.log(document.body.children);

console.log(document.body.children[4]);
document.body.children[4].setAttribute("style","background-color:blue;" )


let b= document.getElementById("users-div");
console.log(b)

b.firstElementChild.setAttribute("style","display:none");
b.lastElementChild.setAttribute("style","border: 2px solid green")

document.body.children[4].style.fontSize = '25px'
b.style.fontSize = '25px'