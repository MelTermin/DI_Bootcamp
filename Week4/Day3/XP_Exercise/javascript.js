//Exercise 1//
//vegetables array will push before the bread string and after chicken string the fruits array will be pushed

const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);

//only the USA string will appear in the arrau
const country = "USA";
console.log([...country]);


//It will be undefined
let newArray = [...[,,]];
console.log(newArray);


//Exercise 2//



let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
{ firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
{ firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
{ firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
{ firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
{ firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
{ firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];


let usersHello= users.map(element => console.log(`Hello ${element.firstName}`))

let fullStack= users.filter(element => element.role=="Full Stack Resident");
console.log(fullStack)

let congratulations= fullStack

fullStack.map(element=>console.log(`Congrats ${element.firstName}`))


//Exercise 3//

let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];


let combination = epic.reduce((x, y)=> x+y)
console.log(combination)


//Exercise 4//

let student = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];

let passingStudents= student.filter((element)=> {
  if(element.isPassed==true) {
  console.log(`Congratulations! ${element.name} you have passed the course`)
  return element.isPassed
}
});
