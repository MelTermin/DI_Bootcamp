console.log("hello")

function sendData () {
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;

  fetch('http://localhost:3000/login',{
    method:'POST',
    headers: {
      'Content-type':'application/json'
    },
    body: JSON.stringify({username,password})
  })
    .then(res => res.json())
    .then(data => {
      let display = document.getElementById('display');
      display.innerHTML = data.message
    })
    .catch(e => {
      console.log(e);
    })
}