const Form = (props)=> {
  const {fname,lname, email,number, handleChange, handleSubmit, isSubmitted,handleReset}=props
  if(isSubmitted===false) { return (
    <div>
      <h1>Welcome!</h1>
      <h3>Please provide information below.</h3>

      <form onSubmit= {handleSubmit}>
        <input type="text" name='fname' value={fname} id="fname" placeholder="firstname" required onChange= {handleChange} ></input>

        <input type="text" name='lname'  value={lname} placeholder="lastname" required onChange= {handleChange} ></input>

        <input type="text" name='number'  value={number} placeholder="email" required onChange= {handleChange} ></input>

        <input type="text" name='email'  value={email} placeholder="phone number"  required onChange= {handleChange}></input>

        <button >Submit</button>
      </form>

      <div id="results"></div>
    </div>
  )} else {
    return (
      <div>
        <p> {fname}</p>
        <p> {lname}</p>
        <p> {number}</p>
        <p> {email}</p>
        <button onClick= {handleReset}>Reset</button>
      </div>
    )
  }
 
  }
  
  export default Form