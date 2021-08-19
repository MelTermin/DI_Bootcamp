const Card = (props)=> {
  const {superheroes,handleClick}=props
  
  return (
    <div>
       {
        superheroes.map((item) => {
          return (//dont forget to return it Melissa!!//
            <div className="container"> 
            <div  key= {item.id} className="box"  onClick= {handleClick}>
            <img src={item.image}  alt="superhero" width="200" 
            height="260" id= {item.id} ></img>
            <br></br>
            <br></br>
            <strong className="details"> Name: {item.name}</strong>
            <br></br>
            <br></br>
            <strong className="details">Occupation: {item.occupation}</strong>
          </div>
          </div>)
        })
      }
  
    </div>
  )
  }
  
  export default Card