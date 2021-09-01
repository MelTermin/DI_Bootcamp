import React,{ useState } from 'react'



function Login() {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleRegistration= () => {
  fetch('http://localhost:4000/login', {
    method:'POST',
    headers: {
      'Content-type':'application/json'
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  })
  .then(response => response.json())
  .then(userdata=>{
    console.log(userdata);
  })
  .catch(e => {
    console.log(e);
  })
  setEmail("")
  setPassword("")
}
  return (
    <div>
      <h1>Login</h1>

      <div>
        
        <label>Email</label>
        <input type="text" name="email" value= {email}
         onChange={e => setEmail(e.target.value)}></input>

        <label>Password</label>
        <input type="password" name="password" value= {password}
         onChange={e => setPassword(e.target.value)}></input>

        <button onClick= {handleRegistration}>Register</button>

      </div>
    </div>
  )
}

export default Login
