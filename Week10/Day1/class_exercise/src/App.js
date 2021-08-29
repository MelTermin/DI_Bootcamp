import { useState,useEffect } from 'react';
import React from 'react';
import './App.css';


//in here setCounter is like using this.setState we are rendering our page
//useState is the initial state
const App = () => {
  const[counter,setCounter]= useState(0)
  const [name, setName]= useState("")
  
  //for life cycle event in the functional componenet

  useEffect(() => {
    console.log("useEffect", counter)
  } //,[]// //the second parameter can be empty brackets(componentDidMount) or with the the state, and with anything will act like all the life cycle events
  )
  return (
    <div>
      <p>{counter}</p>
      <button onClick= {()=>setCounter(counter+1)}>Click</button>
      <input type="text" onChange= {(e)=>setName(e.target.value)}></input>
      <p>Your name {name} </p>
    </div>
  )
}

export default App;

// class App extends React.Component  {
//   constructor(){
//     super();
//     this.state = {
//       counter:0
//     }
//   }
//   plusOne=() => {
//     this.setState({counter:this.state.counter+1})
//   }

//   render() {
//   return (
//     <div >
//       <p>{this.state.counter}</p>
//       <button onClick={this.plusOne}>Click</button>


//     </div>
//   );
// }
// }

// export default App;
