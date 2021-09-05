import React from 'react'

function TrackerList(props) {
  const {details}=props
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
            <button>Edit</button>
            <button>Delete</button>
          
          </div>)
        })
      }
     
    </div>
  )
}

export default TrackerList
