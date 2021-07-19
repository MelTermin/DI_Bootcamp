//Exercise 2//

let sum=0;

function add(num1, num2) {return num1+num2}

console.log(add(2,5))


//Exercise 2// In this code I am taking the function addtoTen and assigning to another value. They have the  same reference value. So in the addTo function the x value  ia 3 and y is 10 and the sum will be 13.
const addTo = x => y => x + y;
var addToTen = addTo(10);
addToTen(3);


