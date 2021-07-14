//to increment the div of colors//
let colorBoxes=21;
let colorPalettes= ["#93f6c6","#b42f55", "#8744ab", 
  "#8959df", "#8744ab", "#4f3340","#e561fd","#00b8ff", "#00b7c3", "#cc2954","#4c4a48", 
"#37283b", "#f53678", "#f42069","#96ceb4","#ffeead","#ff6f69","#ffcc5c","#88d8b0","	#6497b1",	"#005b96","	#6fcb9f"
]
let colorDivs=new Array();

let colorNeutral=null;


let colors= document.getElementById("main-colors");
console.log(colors)

for(let i=0; i<colorBoxes; i++) {
  colorDivs[i]=document.createElement("div");
  colorDivs[i].style.backgroundColor = colorPalettes[i];
  colorDivs[i].className = 'colors';
  colors.appendChild(colorDivs[i]);
  //console.log(colorDivs[i])//
}

//Increment the tiny boxes//
let mainCanvas=890;
let canvasDivs=new Array();

const mainDivForCanvas = document.getElementById("main-canvas")
console.log(mainDivForCanvas)

for(let i=0; i<mainCanvas; i++) {
  canvasDivs[i]=document.createElement("div");
  canvasDivs[i].className = "blocks"
  canvasDivs[i].style.backgroundColor="white";
 
  mainDivForCanvas.appendChild(canvasDivs[i]);
  //console.log(colorDivs[i])//
}

//Add event listeners to colors//


document.querySelectorAll('.colors').forEach(item => {
  item.addEventListener('click', event => {
    console.log("clicked")
    colorNeutral=event.target.style.backgroundColor
    
  })
})


//Add event listerners to tiny boxes//

document.querySelectorAll('.blocks').forEach(item => {
  item.addEventListener('click', event => {
    console.log("I am a tiny box")
    event.target.style.backgroundColor=colorNeutral
  })
})


//Clear Button//

let btn=document.getElementsByTagName("button")[0];
console.log(btn);
let tinydivs=document.querySelectorAll(".blocks");
console.log(tinydivs)

btn.addEventListener("click",deleteHandler);

function deleteHandler(){
  console.log("clear button")
  for(let i=0; i<tinydivs.length; i++) {
  //console.log( tinydivs[i])//
    tinydivs[i].style.backgroundColor="white";
  }

}

let mousedown = false;
let body = document.getElementsByTagName("body")[0];
console.log(body)


body.addEventListener("mousedown", function(){
  mousedown = true;
})

body.addEventListener("mouseup", function(){
  mousedown = false;
})


for (tinydiv of tinydivs){
  tinydiv.addEventListener("mousedown", function(event){
      if (colorNeutral != null) event.target.style.backgroundColor = colorNeutral;
  });
  tinydiv.addEventListener("mouseover", function(event){
      if (mousedown && colorNeutral != null) event.target.style.backgroundColor = colorNeutral;
  });
}
