// setTimeout(function(){
// console.log("logging two seconds after")
// },2000)

// setTimeout(wait,3000)


// function wait () {
//   console.log("from wait function")
// }

// const id= setTimeout(function(){
//   console.log("hello")
//   },2000)

//   console.log(id)

let id;
function wait() {
  console.log("before the waiting")
  id= setInterval(function(){
    console.log("waiting for 4 seconds")
  },4000)
}

function cancel () {
  clearTimeout(id)
}

//SetInterval=> calling function over again

// let id2= setInterval(function() {
//   console.log("hi from interval")
// }, 5000);


let box= document.getElementsByClassName("box")[0];
console.log(box)

box.addEventListener("click", moveBox);

function moveBox () {
  console.log("clicked")
  id= setTimeout(function(){
    console.log("waiting for 2 seconds")
  },2000)
  box.classList.add("moving")
 
}

//I have the other code on Slack
// const box = document.getElementById('box');
// let id;
// let left = 0;
// let screenWidth = window.screen.availWidth;
// function move() {
//   id = setInterval(function(){
//     if(left > screenWidth-20)
//       stop()
//     left += 5;
//     // box.style.left = left + 'px';
//     box.style.left = `${left}px`
//   },5)
// }
// function stop() {
//   clearInterval(id)

//Dont forget the button onClick="move()" & onClick="stop()"
// }
