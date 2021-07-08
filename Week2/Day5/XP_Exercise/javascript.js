function playTheGame () {
let userInput=window.confirm("Would you like to play a game ?")

if(userInput==false) {
  alert("No problem goodbye");
}else {
  let userNumber=Math.floor(prompt("Please enter a number between 0 to 10"))
  console.log(userNumber);

  if(isNaN(userNumber)) {
    alert("Sorry is not a number")
  } else if(userNumber>10) {
    alert("Sorry is not a good number bye!")

  } else {
    let computerNumber= Math.floor(Math.random()*10);
    console.log(computerNumber)
    test(userNumber, computerNumber)
  }
}

}

playTheGame ();

let guessedTimes = 0;

function test (userNumber,computerNumber, guessedTimes) {
  if(userNumber===computerNumber) {
    alert("WINNER")
    guessedTimes += 1
    if (guessedTimes == 3) {
      return alert("out of chances you guessed "+guessedTimes+ " times")
  }
  }else if(userNumber >computerNumber) {
    alert("Your number is bigger then the computer’s, guess again")

  } else if (userNumber < computerNumber) {
    alert("Your number is smaller then the computer’s, guess again")
  }
}

test();

















