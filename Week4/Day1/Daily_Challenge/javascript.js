const gameInfo = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },
 ];


 gameInfo.forEach((name, index, arrayNames) =>arrayNames[index]=name.username +"!");

 console.log(gameInfo)


 gameInfo.forEach((name, index, arrayScores) =>arrayScores[index]=name.score>5 ? name.score : "not bigger than five")


//Second way

//  function score(element,index,array){
 
//   if(element.score>5) {
//     console.log(`${element.username} = ${element.score}`)
    
//   }else {
//     console.log("you scored less")
//   }
// }
//   // return(element.score>5  ? element.username : "You scored less") ;=>this somehow did not work
 

//  gameInfo.forEach(score);


//Couldnt solve it with for eaxch 
// let sum=0;

// gameInfo.forEach((name, index, arrayScores) =>arrayScores[index]=sum+ name.score)

// console.log(sum)




let sum = 0;
for (var i = 0; i < gameInfo.length; i++) {
  sum += gameInfo[i].score
}

console.log(sum)




