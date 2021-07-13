let btn=document.getElementById("lib-button");
console.log(btn)


let lidDetailInputs=document.querySelectorAll("input")
console.log(lidDetailInputs)

btn.addEventListener("click", generateLib)

let span = document.getElementById("story")
function generateLib() {
  console.log("clicked")

 
  let nounValue = lidDetailInputs[0].value;
  let adjValue = lidDetailInputs[1].value;
  let nameValue = lidDetailInputs[2].value;
  let verbValue = lidDetailInputs[3].value;
  let placeValue = lidDetailInputs[4].value;
  
  let sentence = `${nounValue} ${adjValue} ${nameValue} ${verbValue} ${placeValue}`
  console.log(sentence)
 
  if(nounValue.length < 2 || adjValue.length < 2 || nameValue.length < 2 || verbValue.length < 2 || placeValue.length < 2){
    alert('The input has to be more than 2 characters')
}else{
    span.innerHTML = sentence
}


}

let newButton = document.createElement("button");
newButton.innerHTML = "Shuffle it!"
document.body.appendChild(newButton)
newButton.addEventListener('click', shuffle)

function shuffle() {
  generateLib()
    let x= [];
    for(let i=0; i< lidDetailInputs.length; i++){
        let values = lidDetailInputs[i].value
        x.push(values)
        x.sort(() => Math.random() - 0.5);
        
    }
    let newSent = x.join(' ')
    console.log(newSent)
    span.innerHTML = newSent
}

