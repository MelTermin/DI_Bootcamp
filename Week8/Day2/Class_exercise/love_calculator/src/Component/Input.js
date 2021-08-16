const Input= (props) => {
  const {firstname,secondname,handleFirstInput,handleSecondInput}=props
  return(
    <div>
      <input type="text" onChange= {handleFirstInput}/>{firstname}
      <br></br>
      <input type="text" onChange= {handleSecondInput}/>{secondname}
    </div>
  )

}

export default Input
