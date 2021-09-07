import React from 'react'

function TrackerList(props) {
  const {details,setDetails}=props

  const handleDelete= async (id) => {
    console.log(id)
    await fetch(`http://localhost:4000/tracker/${id}`, {
      method:"DELETE"
    })
    const newList = details.filter((item) => item.id !== id);
    setDetails(newList);
  }
  return (
    <div>
      {
        details.map((item) => {
          return (//dont forget to return it Melissa!!//
          <div key= {item.id} className="results" >
            <p>{item.exercise}</p>
            <p>{item.repetition} rep</p>
            <p>{item.weight} kg</p>
            <p>{item.duration} min</p>
            <button onClick= {() =>handleDelete(item.id)}>Edit</button>
            <button>Delete</button>
          
          </div>)
        })
      }
     
    </div>
  )
}

export default TrackerList
