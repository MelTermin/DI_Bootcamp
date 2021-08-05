//get the details of the form//

const form= document.forms[0]
console.log(form)
const button= document.getElementById("button")

const taskDisplayer= document.getElementById("task-displayer")
console.log(taskDisplayer)

button.addEventListener("click", function(event) {
event.preventDefault()
console.log("clicked")

let modalDescription;

const name=document.getElementById("name").value
const description=document.getElementById("description").value
const startDate= new Date(document.getElementById("start-date").value)
console.log(startDate)
const startTime=document.getElementById("start-time").value
const endDate=new Date(document.getElementById("end-date").value)
const endTime=document.getElementById("end-time").value
console.log(name,description,startDate, startTime, endDate, endTime)

//to get the days remaining//
const differenceDays=parseInt((endDate - startDate)/ (24 * 3600 * 1000));

//Save them in local storage
localStorage.setItem("name", name)
localStorage.setItem("description", description)
localStorage.setItem("start_date", startDate)
localStorage.setItem("start_time", startTime)
localStorage.setItem("end_date", endDate)
localStorage.setItem("end_time", endTime)

console.log("LocalStorage = ", localStorage)

form.reset()

//Get the todo items and append it in the DOM//
let userName = localStorage.getItem("name");
let userStartDate = localStorage.getItem("startDate");
let userDescription= localStorage.getItem("description");


let divWrapper=document.createElement("div")
divWrapper.classList.add("items")

//status part//
let checkStatus=document.createElement("input")
checkStatus.type="checkbox"

checkStatus.addEventListener("click",checkHandler)

function checkHandler () {
  console.log("I clicked the checkbox")
  if (checkStatus.checked) {
 parag.style.color="green"
  }else  {
    parag.style.color="black"
  }
}



let parag = document.createElement("p");
parag.textContent = userName

//creating the modal//
parag.addEventListener("click", descriptionDisplayer);


function descriptionDisplayer () {
  console.log("I clicked the name")

  // let userDescriptionDiv= document.createElement("div")
  // userDescriptionDiv.classList.add("modal")

  modalDescription=document.createElement("p")
  modalDescription.innerText=userDescription


  //close button//
  let closeButton=document.createElement("button")
  closeButton.innerText="Close"

  closeButton.addEventListener("click", closeHandler)
  function closeHandler () {
    console.log("I clicked the close button")
    modalDescription.remove()
    closeButton.remove()

  }
 

 
  taskDisplayer.append(modalDescription,closeButton)
 

  return modalDescription
} 

let startingDate=document.createElement("p");
startingDate.innerText=new Date(startDate).toLocaleDateString()


let daysRemaining= document.createElement("p")
daysRemaining.innerText= differenceDays + " " + "days left"

//delete button//
let deleteButton=document.createElement("div")
deleteButton.innerHTML='<i class="far fa-window-close"></i>'
deleteButton.className="close-btn"

deleteButton.addEventListener("click", deleteItem)

function deleteItem() {
  console.log("clicked the delete item")

  let deleteConfirmation=document.createElement("div")
  deleteConfirmation.innerText="Are you sure you want to delete the todo item?"

  let yesButton=document.createElement("button")
  yesButton.innerText="Yes"

  yesButton.addEventListener("click", () => {
    deleteConfirmation.remove()
    divWrapper.remove()
 });

  let noButton=document.createElement("button")
  noButton.innerText="No"

  noButton.addEventListener("click", () => {
    deleteConfirmation.remove()
 });
  
 deleteConfirmation.append(yesButton,noButton)
 taskDisplayer.append(deleteConfirmation)
 
}

//edit button//
let editButton=document.createElement("div")
editButton.innerHTML='<i class="far fa-edit"></i>'
editButton.className="close-btn"

editButton.addEventListener("click",editHandler)

function editHandler () {
  console.log("I clicked edit Handlerrrr")

  //creating the edit from //
  let editHandlerDiv=document.createElement("form")
  let labelName=document.createElement("label")
  labelName.innerText="Name"

  let inputEdit=document.createElement("input")
  inputEdit.type="text"
  inputEdit.placeholder="Please edit todo item"

  let labelDescriptionName=document.createElement("label")
  labelDescriptionName.innerText="Description"

  let inputEditDescription=document.createElement("input")
  inputEditDescription.type="text"
  inputEditDescription.placeholder="Please edit todo item"


  let labelStartDateName=document.createElement("label")
  labelStartDateName.innerText="Start Date"

  let inputEditStartDate=document.createElement("input")
  inputEditStartDate.type="date"

  let labelEndDateName=document.createElement("label")
  labelEndDateName.innerText="End Date"

  let inputEditEndDate=document.createElement("input")
  inputEditEndDate.type="date"

  let saveButon=document.createElement("button")
  saveButon.innerText="Save"

  saveButon.addEventListener("click", (event) => {
    event.preventDefault()
    
    inputEdit.value=localStorage.setItem( "name",inputEdit.value)
    inputEditDescription.value=localStorage.setItem( "description",inputEditDescription.value)
    new Date(inputEditStartDate.value)==localStorage.setItem( "start_date",new Date(inputEditStartDate.value))
    new Date(inputEditEndDate.value)==localStorage.setItem( "end_date",new Date(inputEditEndDate.value))


 let userEdit = localStorage.getItem("name");
 let userEditDescriptionNew=localStorage.getItem("description");
 console.log(userEditDescriptionNew)
 let userStartDateNew=localStorage.getItem("start_date");
 let userEndDateNew=localStorage.getItem("end_date");
 

 const differenceDaysNew=parseInt((new Date(inputEditEndDate.value) - new Date(inputEditStartDate.value))/ (24 * 3600 * 1000));
 console.log(differenceDaysNew)

 parag.textContent = userEdit
 startingDate.innerText=new Date(userStartDateNew).toLocaleDateString()
 //the line 206 does not update the description part//
 modalDescription==userEditDescriptionNew
 
 daysRemaining.innerText= differenceDaysNew + " " + "days left"

 
    editHandlerDiv.reset()
    editHandlerDiv.remove()
 });
 
  editHandlerDiv.append(labelName,inputEdit,labelDescriptionName,inputEditDescription,labelStartDateName,inputEditStartDate,labelEndDateName,inputEditEndDate,saveButon)
  taskDisplayer.append(editHandlerDiv)

}


divWrapper.append(checkStatus, parag,startingDate,daysRemaining,deleteButton,editButton)
taskDisplayer.append(divWrapper)



})