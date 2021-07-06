//Exercise XP Gold//

let building = {
  numberLevels : 4,
  numberOfAptByLevel : {
      "1": 3,
      "2": 4,
      "3": 9,
      "4": 2,
  },
  nameOfTenants : ["Sarah", "Dan", "David"],
  numberOfRoomsAndRent:  {
      "Sarah": [3, 990],
      "Dan":  [4, 1000],
      "David": [1, 500],
  },
}

console.log(building["numberLevels"])

console.log(building["numberOfAptByLevel"]["1"],building["numberOfAptByLevel"]["3"])

console.log(building["numberOfRoomsAndRent"]["David"])

let sarahAndDavidRent= building["numberOfRoomsAndRent"]["Sarah"][1]+building["numberOfRoomsAndRent"]["David"][1];

let danRent=building["numberOfRoomsAndRent"]["Dan"][1]
console.log(danRent)
console.log(sarahAndDavidRent)

if(sarahAndDavidRent>danRent) {
  danRent= danRent +50;
  console.log(danRent)
}

//XP Gold Exercise 2//
let numbers = [123, 8409, 100053, 333333333, 7]

for(let i=0; i<numbers.length; i++) {
  if(numbers[i] % 3==0) {
    //console.log(numbers[i])//
    console.log("true", numbers[i])
  }else {
    console.log("false", numbers[i])
  }
  
}


//Exercise 3 XP Gold//
let ageCounter=0;
let age = [20,5,12,43,98,55];

for (let i=0; i<age.length; i++){
  ageCounter= ageCounter +age[i]
  console.log(ageCounter)
}


