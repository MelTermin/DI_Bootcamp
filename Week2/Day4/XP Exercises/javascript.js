//XP Exercise//

//XP Exercise1, Part-1//

function  infoAboutMe() {
  console.log("My name is Melissa, and I am 29 years old,love building things and knitting.")
}
infoAboutMe(); 

//Exercise1, Part-2//
function  infoAboutPerson(personName, personAge, personFavoriteColor) {
console.log(` My name is ${personName}, I am ${personAge} years old, my favourite color is ${personFavoriteColor}`)
}

infoAboutPerson("David", 45, "blue");


//Exercise1, Part-3//
function  infoAboutPerson1(personName, personAge, personFavoriteColor,personHobbies){
  console.log(` My name is ${personName}, I am ${personAge} years old, my favourite color is ${personFavoriteColor}`)

  for(let i = 0; i < personHobbies.length; i++){
    console.log(personHobbies[i]);
  }
}

infoAboutPerson1("David", 45, "blue", ["tennis", "painting"]);

//XP Exercise 2//

let userAge= prompt("What is your age");

let userAnswer= userAge;

function checkDriverAge () {
  if(userAnswer<18) {
    alert("Sorry, you are too young to drive this car. Powering of");
  } else if (userAnswer>=18) {
    alert ("You are old enough to drive, Powering On. Enjoy the ride!");
  } else if(userAnswer<18) {
    alert("Congratulations on your first year of driving. Enjoy the ride!")
  } 
}
checkDriverAge(userAnswer);

//Exercise 3//

function checkNumber () {
for(let i=0; i<=100; i++) {
  //console.log(i);//
  if(i %2==0) {
    console.log(`${i} is even`)
  } else {
    console.log(`${i} is odd`)
  }
}
}

checkNumber();

//Exercise 4//
let counter= 0;
function isDivisible () {
  for(let i=0; i<=500; i++) {
   
    if (i%23==0) {
      console.log(i)
      counter= counter+i
    
    }
  console.log(counter);
  }
}
isDivisible ()

//Exercise 5//

let amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
}



function checkBasket() {
  
let userAnswer2= prompt("Please enter an item");
 console.log(userAnswer2);

 if(userAnswer2 in amazonBasket) {
   console.log("Your item has been added");
 } else {
   console.log("Your item has not been added")
 }

  }

checkBasket();

//Exercise 6//

let sumMoney;

function changeEnough ([quarters, dimes, nickels, pennies], price) {

  quarters  = 0.25 * quarters;
  dimes = 0.10 * dimes;
  nickels = 0.05 * nickels;
  pennies = 0.01 * pennies;
  sum = quarters + dimes + nickels + pennies;

  return sumMoney > price

}

changeEnough([2, 100, 0, 0], 14.11); 

//Exercise 7//

let stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

let prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
}

let shoppingList= ["banana", "orange", "apple"];



function myBill ()  {
  let sum = 0

  for (item of shoppingList) {
    console.log(item)
    if (item in stock && stock[item] > 0) {
      //console.log(stock[item])//
      stock[item]-- 
      sum += prices[item] 
    }
  }

  return sum
}


console.log(myBill());

//Exercise 8//

let finalBill=0;
let tipAmount=0;
let userAnswer3= parseInt(prompt("What is your bill ?"))

function tipCal () {
  if(userAnswer3<50) {
tipAmount= userAnswer3*20/100
finalBill = userAnswer3 + tipAmount

console.log(`The tip amount is ${tipAmount}, the final bill is ${finalBill}`)

} else if (userAnswer3<200) {
  tipAmount= userAnswer3 *15/100
  finalBill = userAnswer3 + tipAmount
  console.log(`The tip amount is ${tipAmount}, the final bill is ${finalBill}`)
} else if (userAnswer3>200) {
  tipAmount= userAnswer3 *10/100
  finalBill = userAnswer3 + tipAmount
  console.log(`The tip amount is ${tipAmount}, the final bill is ${finalBill}`)
}

}

tipCal();


//Exercise 9//

function hotelCost() {
  let isNumber = true; 
  let pricePerNight = 140;
  while (isNumber) {
  let nightNumber = parseInt(prompt("How many nights? "));
  if(isNaN(nightNumber)){
     alert("not a number");
      }else{
   isNumber = false;
  return nightNumber * pricePerNight;
      }
  }
}


function planeRideCost() {
  let isString= true; 
  let london = 183;
  let paris = 220;
  let other = 300;
  while (isString) {
    let destination = prompt("What is your destination? ");
    if(!isNaN(destination)){
    alert("not a word..");
      }else{
   isString = false;
    if(destination == "paris"){
    return paris;
    }else if(destination == "london"){
    return london;
    }else{
    return other;
          }
      }
  }
}


function rentalCarCost() {
  let isNumber = true; 
  let carCost = 40;
  let sum;
  while (isNumber) {
    let numOfDays = parseInt(prompt("How many days do you want ther rent the car for?  "));
    if(isNaN(numOfDays)){
    alert("not a number");
    }else{
    isNumber = false
    sum = numOfDays * carCost;
    if(numOfDays < 10){
    return sum
    }else{
   return sum -= sum * 0.05
    }
    }
  }
}
function totalVacationCost(){
  let total = hotelCost() + planeRideCost() + rentalCarCost();
  return `your total is $${total}`
}

console.log(totalVacationCost())
