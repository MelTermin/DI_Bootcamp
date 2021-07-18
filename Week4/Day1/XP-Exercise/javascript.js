// #1,2,3,4 will not return anything because the function are not being called. But the #5 will return 5 because it take the value of two from the global scope and put it inside the if statement but inside the state the variable a is reassigned to another valu which is 5 , so it will alert 5


//Exercise 2//

function winBattle(){
  return true;
}
experiencePoints = () =>  winBattle ? 10 : 1
console.log(experiencePoints())



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
let ordinal = ["th","st","nd","rd"];

color.forEach((element, index) => {
  if (index == 0) {
      console.log(`#${index+1}${ordinal[1]} choise is ${element}`)
  }else if (index  ==1) {
      console.log(`#${index+1}${ordinal[2]} choise is ${element}`)
  }else if(index  ==2){
      console.log(`#${index+1}${ordinal[3]} choise is ${element}`)
  } else{
      console.log(`#${index+1}${ordinal[0]} choise is ${element}`)
  }

})


//Exercise 5 //

function isString(value) {
	return typeof value === 'string' || value instanceof String;
}

console.log(isString(1));


//Exercise 6
let bankAmount= 4000;

let vat=17/100;


let details =["+200", "-100", "+146", "+167", "-2900"]

details.forEach((element, index, array ) => array[index]  = eval(element * 0.17 + element))
console.log(details)
details.forEach(element => bankAmount += element )
console.log(`your money at the end of the month is: ${bankAmount}`)
