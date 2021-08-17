const Result = ({ details })=> {
  const{firstname,lastname,age,gender,destination, nutfree}=details
  return (
    <div>
      <p>Your name :{firstname}</p>
      <p>Your lastname :{lastname}</p>
      <p>Your age :{age}</p>
      <p>Gender: {gender}</p>
      <p>Destination:{destination}</p>
      <p>Dietary:{nutfree}</p>

    </div>
  )
  }
  
  export default Result