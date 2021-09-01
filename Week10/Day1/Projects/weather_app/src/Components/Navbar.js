import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbar">
      <h1>Weather Application</h1>
      <ul>
        <Link to="/home">
          <li>Home</li>
        </Link>

        <Link to="/favourites">
          <li>Favourites</li>
        </Link>
      </ul>
      
    </div>
  )
}

export default Navbar
