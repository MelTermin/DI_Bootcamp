//XP Exercise 1//
let colorCounter= 0;
let colors = ["blue"," red", "green","violet"];

for (let i=0; i<colors.length; i++) {
  colorCounter++
  console.log(` My #${colorCounter} choice is ${colors[i]}`  )
}

//XP Exercise 2//

let people = ["Greg", "Mary", "Devon", "James"]
people.shift();
//console.log(people)//
people.splice(2,1,"Jason")
//console.log(people)//
people.push("Melissa")
//console.log(people)//

for (let i=0; i<people.length; i++) {
  console.log(people[i]);
}

for (const person of people) {
  if (person === 'Jason') break
 // console.log(person)//
}

const newPeopleArray= people.slice(1, people.length-1)
console.log(newPeopleArray)

console.log(people.indexOf("Mary"))

console.log(people.indexOf('Foo'))//it doesnt exist//

let last=people[people.length - 1]
console.log(last)


//Exercise 3//

let userAnswer= prompt("Enter a number");

while(userAnswer<10){
  userAnswer=prompt("Enter a number")
}

//Exercise 4//

let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
}

let userAttendence= prompt("Please enter your name")

if( userAttendence in guestList){
  console.log(`Hi I'm ${userAttendence}, and I'm from ${guestList[userAttendence]}`)
} else {
  console.log("Hi, I am a guest")
}

//Exercise 6//
let details = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}

let string = ''
for (const key in details) {
  //console.log("key",key,"details",details[key] )//
  string += key + ' ' + details[key]
}

console.log(string)


//Exercise 7//

let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"]

names.sort();
console.log(names)

let secrectSociety="";

for (const name of names) {
  console.log(name, name[0])
  secrectSociety += name[0]
}

console.log(secrectSociety)




