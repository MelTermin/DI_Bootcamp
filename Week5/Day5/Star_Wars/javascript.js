let starWarsContainer=document.getElementById("starwars-box")
let btn=document.getElementById("btn");

console.log(starWarsContainer)
console.log(btn)

let loader=document.querySelector(".loader")
console.log(loader)



let id=1


async function starWarsFinder () {
  try {
  console.log("clicked")
  starWarsContainer.innerHTML="";

  let id= Math.floor(Math.random() * 83)
  let url=`https://swapi.dev/api/people/${id}/`
  loader.classList.remove("hidden");
  fetch(url)
 .then((response) => response.json())
 .then((data) => {
 
   console.log(data)

   
   let name=document.createElement("p")
   name.classList.add("name")
   name.innerText="Name"+ " " + ":" + " " + data["name"]

   let height=document.createElement("p")
   height.classList.add("name")
   height.innerText="Height"+ " " + ":" + " " + data["height"]

   let  birth_year=document.createElement("p")
   birth_year.classList.add("name")
   birth_year.innerText="Birth Year"+ " " + ":" + " " + data["birth_year"]

   fetch(`${data.homeworld}`)

   .then(resp => resp.json())
        .then(planet => {
          console.log(planet)
          let home=document.createElement("p");
          home.classList.add("name");
          home.innerText="Homeland"+ " " + ":" + " " + data.name
          starWarsContainer.append(home)
         
        })

       
      

starWarsContainer.append(name,height, birth_year)
console.log(starWarsContainer)

loader.classList.add("hidden");


})
}catch(err) {
  console.log("The error is", err)
}

}

btn.addEventListener("click", starWarsFinder);