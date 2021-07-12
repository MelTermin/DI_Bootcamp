let selectedInput=document.getElementsByTagName("option")[1].value;
console.log(selectedInput)

let section=document.getElementById("genres");

let additionalOption=document.createElement("option")
additionalOption.setAttribute("value","classic")
additionalOption.setAttribute("selected", "")

additionalOption.innerText="Classic"
console.log(additionalOption)

section.append(additionalOption)

//Exercise 2 //

let selectedColors= document.getElementById("colorSelect");
console.log(selectedColors)

let btn= document.getElementsByTagName("input")[0]
console.log(btn)
btn.addEventListener("click", removeColor)

function removeColor(e) {
  console.log("clicked")
  for(let i=0; i<selectedColors.length; i++) {
    console.log(selectedColors[i].value)
  
  }
}