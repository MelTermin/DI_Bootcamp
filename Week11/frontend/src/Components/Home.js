import React from 'react'
import {AppContext} from "../App"

function Home() {
const {handleLogout,firstName,email}= React.useContext(AppContext)
  console.log(firstName)
  return (
    <div>
      
      <p>{firstName}</p>
      <p>{email}</p>
      <h1>lala</h1>
      <button onClick= {handleLogout}>Log out</button>
    
    </div>
  )
}

export default Home
