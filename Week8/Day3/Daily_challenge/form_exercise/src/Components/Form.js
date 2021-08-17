const Form = (props)=> {
  const {firstname, lastname,age, destination, handleChange,nutfree}=props
  return (
    <div className="form">
    <form>
      <input name="firstname" value={firstname}  onChange={handleChange} type="text" placeholder="Please type your name"></input>
      <input  name="lastname" type="text" value={lastname}  onChange={handleChange} placeholder="Please type your last name"></input>
      <input  name="age" type="text" value={age}  onChange={handleChange} placeholder="Please type your age"></input>
      <p>Gender</p>
      <input type="radio" name='gender'
                value='female'
                id='male'
                onChange={handleChange}/>
      <label >Female</label>
      <br></br>
      <input type="radio" name='gender'
                value='male'
                id='male'
                onChange={handleChange}/>
      <label >Male</label>
      <label>City :</label>
      <br></br>
       <select onChange={handleChange} value={destination} name='destination'  >
      
        <option selected>Please choose a destination</option>
        <option value="Thailand">Thailand</option>
        <option value="Brazil">Brazil</option>
        <option value="Turkey">Turkey</option>
       </select>

      <br></br>
       <label>Dietary Restrictions:</label>
      {/* Somehow this checkbox is not working */}
       <input type="checkbox"  name='Nutfree' value={nutfree} onChange={handleChange} />
       <label >Nuts free</label>
       <input type="checkbox" name="hobbies" />
       <label >Lactose Fress</label>
       <input type="checkbox" name="hobbies" />
       <label >Vegan</label>

       <button>Submit</button>
</form>
    </div>
  )
  }
  
  export default Form