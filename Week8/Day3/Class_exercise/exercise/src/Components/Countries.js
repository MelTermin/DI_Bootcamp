const Countries = (props)=> {
  const {countries,handleChange}=props
  console.log(countries)
  return (
    <div>
      <select onChange={handleChange}>
      {
 countries.map((items) => {
   return(
       <option value= {items.country_id} key= {items.country_id} >{items.country}  </option>
   )
  
 })
      }
      </select>
    </div>
  )
  }

  export default Countries