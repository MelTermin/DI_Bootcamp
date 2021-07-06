//Exercise 1 for loop//

for (let i=0; i<=15; i++) {
  if (i % 2 ==0) {
    console.log(`${i} is even `)
  } else {
    console.log(`${i} is odd `)
  }
}

//exercise 2//
let prices= [20,12,5, 4,2];

let sum=0;

for (let i=0; i<=prices.length-1; i++) {
 // console.log(prices[i]);//
  sum= sum +prices[i]
  //console.log(prices[0]+prices[1]+prices[2]+prices[3]+prices[4]);//
  console.log(sum)
  
}