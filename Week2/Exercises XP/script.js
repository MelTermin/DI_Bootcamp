//Exercise 1//
let x = 5;
let y = 2;

if (x>y) {
  console.log ( `${x} is the biggest number`)
} else if (x<y) {
  console.log ( `${y} is the smallest number`)
}

//Exercise 2 //

let newDog= "Chihuahua";
console.log(newDog.length)
console.log(newDog.toLowerCase());
console.log(newDog.toUpperCase());

if (newDog=="Chihuahua") {
  console.log("I love Chihuahuas, it’s my favorite dog breed")
} else(console.log("I dont care, I prefer cats"))


//Exercise 3//

let user = prompt("Please type a number");

let userEnteredDetail= user;
console.log(userEnteredDetail);

if (userEnteredDetail%2 == 0) {
  console.log(`${userEnteredDetail} is a even number`)
} else {
  console.log(`${userEnteredDetail} is a odd number`)
}


//Exercise 4 //
let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"]

console.log(users.length);

if (users.length<0) {
  console.log("no one is online");
} else if (users.length===1) {
  console.log(`${users[0]} is online`)
} else if(users.length === 2) {
  console.log(`${users[0]} and ${users[1]} are online`)
} else {
  console.log(`${users[0]}, ${users[1]}, and ${users.length - 2} more are online`)
}
