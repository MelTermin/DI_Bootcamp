
let userInput=parseInt(prompt("Please enter a number"));
let word="bottles";

let countIncrementor=0;


while (userInput>=1) {
  countIncrementor++;
if (countIncrementor==1) {
  console.log(`${userInput} bottles of beer on the wall`);
  console.log(`${userInput} bottles of beer`);
  console.log(`Take ${countIncrementor},pass it around`);

 
  userInput= userInput-(countIncrementor);
}else {

console.log(`${userInput} bottles of beer on the wall`);
 console.log(`${userInput} bottles of beer`);
 console.log(`Take ${countIncrementor},pass them around`);


 userInput= userInput-(countIncrementor);
 
}


if(userInput-countIncrementor<=0) {
  console.log(`${userInput} bottles of beer on the wall`)
  break;
 
  
}
}






