const Phone= (props) => {
  const {brand,model1,year,handleClick,color1}=props
  return (
    <div>
    <h1>My phone is {brand}</h1>
    <small>It is a {color1} {model1} from {year} </small>
    <button onClick= {handleClick}>Change Color</button>
    </div>
  )
}

export default Phone;