import Garage from "./Garage";

const Car= (props) => {
  const {color,model}=props
  return (
    <div>
      <h2 style= {{color}}>Hi, I am a car!</h2>
      <header >{model}</header>
    <Garage></Garage>
    </div>
  )
}

export default Car;