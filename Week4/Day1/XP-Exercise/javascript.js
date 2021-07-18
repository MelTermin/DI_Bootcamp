// #1,2,3,4 will not return anything because the function are not being called. But the #5 will return 5 because it take the value of two from the global scope and put it inside the if statement but inside the state the variable a is reassigned to another valu which is 5 , so it will alert 5


//Exercise 2//

// const experiencePoints=experiencePoints() == true ? 10 : 1



//Exercise 3//

let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

console.log(colors.includes("Violet"))

for(let i=0; i<colors.length; i++) {
  let names =colors[i]
  // console.log(names)
  const colorNum= i+1
  // console.log(choiceNum)
  
console.log(colorNum + '#'  + " " + 'choice is' + " " +colors[i]);
}

//with foreach//
function printColor (color, index) {
  console.log(`${index} # choice is ${color}`)
}

colors.forEach(printColor)

//Exercise 4 //

let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let ordinal = ["th","st","nd","rd","th","th","th"];


for(let i=0; i<color.length; i++) {
  const colorNum= i+1
console.log(colorNum+ordinal[i] + " " + "choice is"+ " " + color[i])
}

//Exercise 5 //

function isString(value) {
	return typeof value === 'string' || value instanceof String;
}

console.log(isString(1));


let bankAmount= 4000;

let vatAmount= bankAmount*17/100;

//Exercise 5
let details =["+200", "-100", "+146", "+167", "-2900"]

for (let i=0; i<details.length; i++) {
  console.log(details[i])
  console.log(details[i].includes("-"))
  if(details[i].includes("+")){
   console.log(vatAmount) 
  }else {
   console.log("You are in minus")
  }
}