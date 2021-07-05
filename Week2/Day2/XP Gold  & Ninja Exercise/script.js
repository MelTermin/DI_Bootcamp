
//Exercise XP Gold//

let user= prompt("What language do you speak ?")

let userAnswer = user.toLowerCase();
console.log(userAnswer);

switch (userAnswer) {
 case "french":
 console.log("Bonjour")
 break;
 case "english":
  console.log("Hello")
  break;
 case "hebrew":
 console.log("Shalom")
 break;
 default:
  console.log("‘01110011 01101111 01110010 01110010 01111001")
}


//Exercise XP Gold 2 //

let userGrade = prompt("What is your grade?");

let userGradeAnswer = userGrade;
console.log(userGradeAnswer);

if (userGradeAnswer>90) {
  console.log("A")
} else if (userGradeAnswer>=80 ) {
  console.log("B")
} else if (userGradeAnswer>=70 ) {
  console.log("C")
} else {
  console.log("D")
}


//Exercise XP Gold 3//

let userVerb= prompt("Please enter a verb");

let userVerbAnswer= userVerb;
console.log(userVerbAnswer)

let word= "ing";


if (userVerbAnswer.length>=3 && userVerbAnswer!=word) {
  console.log(`${userVerbAnswer}${word}`);

//Couldn't figure out the second if part//
} else if (userVerbAnswer.length>=3 && userVerbAnswer.includes("ly") ) {
console.log(`${userVerbAnswer}ly`)
}else {
  console.log(userVerb)
}