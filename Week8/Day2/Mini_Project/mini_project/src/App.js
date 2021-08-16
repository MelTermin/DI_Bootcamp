import Car from './Components/Car'
import Phone from './Components/Phone'
import './App.css';
import React from 'react';

// function App() {
//   return (
//     <div >
//       <Car></Car>
//     </div>
//   );
// }

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      color:"red",
      name: "Ford", 
      model: "Mustang",
      brand: "Samsung",
      model1: "Galaxy S20",
      color1: "black",
      year: 2020
    }
  
  }
  handleClick= () => {
    this.setState({color1:"pink"})
  }
  render() {
    return (
      <div>
        <Car color= {this.state.color} model= {this.state.model}></Car>
        <Phone brand= {this.state.brand} model1= {this.state.model1} year={this.state.year} color1={this.state.color1}handleClick= {this.handleClick}></Phone>
      </div>
    )
  }
}

export default App;
