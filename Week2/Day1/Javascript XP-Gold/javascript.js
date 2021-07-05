//Exercise 1//
let me = ["my","favorite","color","is","blue"];

let newArray = me.join(" ");
console.log(newArray)


//Exercise 2//
let str1= "Panda";
let str2="cute";


let newArray1= `${str1} ${str2} `;

let reverseArray= `${str2} ${str1} `
console.log(reverseArray)


//Exercise 3 //

let num1 = parseInt(prompt("Please type a number"));
console.log(num1);

let num2 = parseInt(prompt("Please type a second number"));
console.log(num2);

let resultofNumbers= num1 + num2 ;
console.log(resultofNumbers);

let resultofSubstract = num2-num1;
let resultofMultiply = num2*num1;
let resultofDivide= num2/num1;


let lastresult= alert(`The result is ${resultofNumbers}`);


function findNemo (sentence) {
  let findIndexArray= sentence.split(" ");
  console.log(findIndexArray);
  let findIndex= findIndexArray.indexOf("Nemo");
  console.log(findIndex);
  if(findIndex >= 0){
    return `I found Nemo at ${findIndex}!`;
  } else {
    return ("I can't find Nemo");
  }
}
console.log(findNemo("My fish is called Nemo , I love it"));


//Exercise 2//
5 >= 1
0 === 1
4 <= 1
1 != 1
"A" > "B"
"B" < "C"
"a" > "A"
"b" < "A"
true === false
true != true

//Results//
true
false
false
false
true 
true
"I dont know the answer"
"I dont know the answer"
false
false


//Exercise 3//
let c;
let a = 34;
let b = 21;
a = 2;
a + b

//The result is 23, a is being reassinged to 2 so, 2+21=23//

console.log(3 + 4 + '5');

//the result will be 75. Because 3+4 is equal 7 and '5' is a string it will be concatented.


//Exercis 4//

let anotherUser= prompt("Please type two numbers with comma seperated");
console.log(anotherUser)

let newResult= anotherUser.split(",");
console.log(newResult);

let newNum1 =parseInt(newResult[0]);
let newNum2 =parseInt(newResult[1]);
console.log(newNum1);

console.log(newNum1+newNum2)
