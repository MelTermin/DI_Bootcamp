// fetch("https://swapi.dev/api/starships/9/")
//     .then(response => response.json())
//     .then(console.log);

//Exercise 1//
let url="https://swapi.dev/api/starships/9/"

async function display () {
  let fetched=await fetch(url)
  let response=await fetched.json()
  console.log(response)
}

display () 


//Exercise2//

function resolveAfter2Seconds() {
  return new Promise(resolve => {
      setTimeout(() => {
          resolve('resolved');
      }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  let result = await resolveAfter2Seconds();
  console.log(result);
}

asyncCall();


//first asynCall function will be in callstack
//then console.log(calling)

//then resolveafter 2 seconds function
//two seconds will wait
//resolved
