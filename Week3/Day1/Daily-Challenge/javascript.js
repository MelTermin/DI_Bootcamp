let section2=document.getElementsByTagName("section")[0];
console.log(section2);

let planets= ["Mercury",
  "Venus","Earth","Mars","Jupiter","Saturn","Uranus",
  "Neptune"];

  let planetsColor=["#00004d","#992e89","#83a8c3","#dde5f0", 
  "#93eb9e","#008080","#0000ff","#fa8072"]

  let planetsMoons= [  0,0,1,2,79,82,27,14,0];


  for (let i=0; i<planets.length; i++) {
    let div= document.createElement("div");
    let title =div.classList.add("planet")
    let paragrapgh=document.createElement("p");
    paragrapgh.innerText=planetsMoons[i];
    let paragrapghTitle=paragrapgh.classList.add("moon")

    div.innerText=planets[i]
    div.style.backgroundColor=planetsColor[i]
    
    
    //appending//
    section2.appendChild(div)
    div.appendChild(paragrapgh)
    
    // console.log(div);
    // console.log(planets[i]);
    
  }