import React , { useState } from 'react'
import { Link } from 'react-router-dom';

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit= () => {
    fetch('http://localhost:4000/register',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify ({
        email:email,
        password:password,
        name:name
      })
    })
    .then(response => response.json())
    .then(user => {
      console.log('user',user);
    })
    .catch(e => {
      console.log(e);
    })
    setName("")
    setEmail("")
    setPassword("")
  }

  return (
    <div>
      <h1>Registration</h1>
      <div>
        <label>Name</label>
        <input type="text" name="name" value= {name}
         onChange={(e) => setName(e.target.value)}
        ></input>

        <label>Email</label>
        <input type="text" name="email" value= {email}
         onChange={(e) => setEmail(e.target.value)}></input>

        <label>Password</label>
        <input type="password" name="password" value= {password} 
         onChange={(e) => setPassword(e.target.value)}
        ></input>

        <button onClick= {handleSubmit}>Register</button>
        


      </div>
      <Link to='/login' style={{margin:'5px'}}>Sign In</Link>
    </div>
  )
}

export default Registration
