const Cities = (props)=> {
  const {cities}=props
  console.log(cities)
  return (
    <div>
           <select>
             {
               cities.map((items) => {
                return(
                    <option value= {items.city_id} key= {items.city_id} >{items.city}  </option>
                )
               
              })
             }
           </select>
    </div>
  )
  }

  export default Cities