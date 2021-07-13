let bigBox=document.getElementById("container");
console.log(bigBox)

let smallBox=document.getElementById("animate")

let button=document.getElementsByTagName("button")[0];
console.log(button)


let left=0;
let id;


button.addEventListener("click",myMove);

function myMove () {
  id = setInterval(function(){
    smallBox.style.left = (left += 5) + 'px'
    if (left >= bigBox.offsetWidth - smallBox.offsetWidth) {
      clearInterval(id)
      console.log(bigBox.offsetWidth,smallBox.offsetWidth,left)
  } 
  },20)
}

//Exercise2 //

let aquaBox=document.getElementById("small-auqua-box");
console.log(aquaBox);

let dragPlace=document.getElementById("dragable-place")
console.log(dragPlace);


//Adding event listeners//

aquaBox.addEventListener("dragstart", dragstart_handler);

dragPlace.addEventListener('dragover',dragover_handler);

dragPlace.addEventListener('drop',drop_handler);

// //Functions//

function dragstart_handler(e){
  

  e.dataTransfer.setData('text/plain',e.target.id);
  console.log(e.target.id);//the name of my id class
}

function dragover_handler(e){
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move'
  
}
function drop_handler(e){
  e.preventDefault();
 
  const data = e.dataTransfer.getData('text/plain')
  console.log(data)
  e.target.appendChild(document.getElementById(data))
  
}