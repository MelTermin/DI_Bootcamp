
//In this codes we are using destructurin and assigning new variables to the objects new keys
//this will allow in the console.log to print to variable like name will be john doe, country will be Canada

const person = {
  name: 'John Doe',
  age: 25,
  location: {
      country: 'Canada',
      city: 'Vancouver',
      coordinates: [49.2827, -123.1207]
  }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);



//Exercise 2//
const displayStudentInfo= (studentObejct) => {
  const {first,last}=studentObejct
  console .log(`Your full name is ${first} ${last}`)
}

displayStudentInfo({first: 'Elie', last:'Schoppik'}) 

//Exercise 3//
const users = { user1: 18273, user2: 92833, user3: 90315 }
console.log(users.user1)

const entries =Object.entries(users);
console.log(entries)

console.log(entries.map(([username,id])=> [username,id*2]));


// Exercise 4//

//In this I am assigning the class Person into a new variable which name attribute is equal to JOhn. With console log it will give object because class is an object
class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member);


// //Exercise 5//


// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// };

// //This will not work because we didnt assign the name property
//   // 1
//   class Labrador extends Dog {
//     constructor(name, size) {
//       this.size = size;
//     }
//   };

// //This will work because we are using the parent element which is the Dog class and using in the constructor
//     // 2
// class Labrador extends Dog {
//   constructor(name, size) {
//     super(name);
//     this.size = size;
//   }
// };

// //the size attribute is not mentioned in the parent class
//   // 3
//   class Labrador extends Dog {
//     constructor(size) {
//       super(name);
//       this.size = size;
//     }
//   };

// //Not sure
//     // 4
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.name = name;
//     this.size = size;
//   }
// };


//Exercise 6//
console.log({} === {}) //false
console.log([2] === [2] )//false


const object1 = { number: 5 };  //5
const object2 = object1; //5
const object3 = object2; //5
const object4 = { number: 5}; //5
object1.number = 4;


class Animal {
  constructor(name, type, color) {
      this.name = name
      this.type = type
      this.color = color
  }
}

class Mamal extends Animal {
  sound() {
      console.log(this.name, this.type, this.color)
  }
}

// 5
const cow = new Mamal('bess,', 'cow,', 'black and white')
cow.sound()