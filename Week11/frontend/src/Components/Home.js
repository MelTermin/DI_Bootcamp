import React from 'react'
import {useState, useEffect} from 'react'
import TrackerList from './TrackerList'



function Home(props) {
const {handleLogout,firstName}= props

const [exercise, setExercise]= useState("")
const [repetition,setRepition]=useState("")
const [weight,setWeight]=useState("")
const [duration,setDuration]=useState("")
const [details,setDetails]=useState([])

const handleDetails= async (e) => {
  e.preventDefault()
  setDetails([...details, {
    exercise:exercise,
    repetition:repetition,
    weight:weight,
    duration:duration
  }])
  await fetch('http://localhost:4000/tracker',{
    method:'POST',
    headers: {
      'Content-type':'application/json'
    },
    body: JSON.stringify({exercise,repetition,weight,duration})
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
  })
  .catch(e => {
    console.log(e);
  })
  setExercise("");
  setRepition("");
  setWeight("");
  setDuration("")
}



console.log(firstName)
  return (
    <div>
      <div className="navbar">
        <h1>Workout Tracker App</h1>
        <p>Welcome,{firstName}</p>
        <button onClick= {handleLogout}>Log out</button>
        </div>
    
    <div className="tracker">

      <label>Name of exercise:</label>
      <input type="text" value= {exercise}  name="exercise"onChange={e => setExercise(e.target.value)} ></input>

      <label>Number of repetition:</label>
      <input type="number" value= {repetition} name="repetition" onChange={e => setRepition(e.target.value)}></input>

      <label>Current Weight:</label>
      <input type="number" value= {weight} name="weight" onChange={e => setWeight(e.target.value)}></input>

      <label>Duration:</label>
      <input type="number" value= {duration} name="duration" onChange={e => setDuration(e.target.value)}></input>

      <button onClick= {handleDetails}>ADD</button>

    </div>

    <TrackerList details= {details} setDetails= {setDetails}/>
    
    </div>
  )
}

export default Home
