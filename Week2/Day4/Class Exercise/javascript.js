//Exercise 1//

function age(myAge) {
 let momAge= myAge*2;
 let dadAge= momAge*12/10;
console.log(momAge);
console.log(dadAge);
}

age(29);

//Exercise 2//

function age2(myAge2) {
  let momAge= myAge2*2;

  let mum= {
    age:momAge,
    line: ` My mum is ${momAge} which is my twice as my age` 
  }
  return mum;
}

console.log(age2(30).line);