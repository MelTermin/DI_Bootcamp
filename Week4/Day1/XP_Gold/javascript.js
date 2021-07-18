let sum=[1,2,3,4,5];
let total=0;
for(let i=0; i<sum.length; i++) {
total +=sum[i];
}

console.log(total)



let names= ["Melissa", "chocalate", "Selin", "chocalate"];
let uniqueArray = [];


names.forEach((index) => {
  if (!uniqueArray.includes(index)) {
      uniqueArray.push(index);
  }
});

console.log(uniqueArray)



// let sampleArray= [NaN, 0, 15, false, -22, '',undefined, 47, null];


// for (let i = 0; sampleArray.length; i++) {
//   if (sampleArray[i] === "NaN" || sampleArray[i] === "undefined") { 
//     sampleArray.splice(i, 1);
//   }
// }

// console.log(sampleArray)
 
function repeat (string, count) {
  if(count=="undefined") {
    count=1;
  }
  return count <1 ? "" : new Array(count+1).join(string)
}

console.log(repeat('Ha!',2));