
//Calling element from the HTML//
const form= document.forms[0]
// console.log(form)
const button= document.getElementById("button")
const taskDisplayer= document.getElementById("task-displayer")
console.log(taskDisplayer)

let taskList = [];

button.addEventListener("click", submitHandler)

function submitHandler (event) {
event.preventDefault()
console.log("clicked")

const name=document.getElementById("name").value
const description=document.getElementById("description").value
const startDate= new Date(document.getElementById("start-date").value)
const endDate=new Date(document.getElementById("end-date").value)


let taskObject= {
  taskName: name,
		description: description,
		startDate: startDate,
		endDate: endDate,
    differenceDays: parseInt((endDate - startDate)/ (24 * 3600 * 1000)),
}
taskList.push(taskObject);
// Put the object into storage
localStorage.setItem("fullList",JSON.stringify(taskList));
// Retrieve the object from storage
let retrievedList = JSON.parse(localStorage.getItem("fullList"));
console.log('retrievedObject: ', retrievedList);

// for (let i = 0; i < retrievedList.length; i++)  {

  
//   let div=document.createElement("div")
//   div.classList.add("todo-items")

//   let checkStatus=document.createElement("input")
//   checkStatus.type="checkbox"

//   let taskName = document.createElement("p");
//   taskName.innerHTML=retrievedList[i]["taskName"]
  
  
//   div.append(checkStatus,taskName)
//   taskDisplayer.append(div)
//   console.log(taskDisplayer)

form.reset()
// }
}
