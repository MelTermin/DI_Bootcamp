let singUpForm=document.forms[0]





const sendDataHandler= (e) => {
  e.preventDefault();
  let firstName = document.querySelectorAll("input")[0].value;
  let lastName = document.querySelectorAll("input")[1].value;
  let string = JSON.stringify({firstName, lastName});
  console.log(string);
  
}

singUpForm.addEventListener("submit", sendDataHandler)