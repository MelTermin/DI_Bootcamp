import React from 'react'
import Logo1 from '../images/download.png'
import Logo2 from '../images/react-logo.png'
import {Link} from 'react-router-dom'



const Navbar = ()=> {
  return (

     
      <div  >
      <div className="navbar">
      <div className="leftSide">
        <Link className="link" to="/">MoreSeriesInfo</Link>
        <Link to="/movie/:id"></Link>
      </div>

      <div className="rightSide">   
        <img className="images" src= {Logo1} alt="Imbd"></img>
        <img className="images" src= {Logo2} alt="React"></img>
      </div>
      </div>      
        
  
      </div>
 


  )
  }
  
  export default Navbar