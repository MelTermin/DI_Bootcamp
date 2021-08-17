import React from 'react';
import Countries from './Components/Countries'
import Cities from './Components/Cities'
import './App.css';

class App extends React.Component  {
  constructor(){
    super();
    this.state = {
      countries:[],
      cities:[]
    }
  }

 
  componentDidMount = () => {
    fetch('http://localhost:5000/countries')
    .then(res => res.json())
    .then(data => {
     this.setState({countries:data})
    //  console.log({countries:data})
    
  })
}

handleChange = (event) => {
  let value = event.target.value;
  console.log(value)
  fetch(`http://localhost:5000/cities/${value}`)
  .then(res => res.json())
  .then(data => {
    this.setState({cities:data})
    // console.log({cities:data})
  })
}


  render() {
  return (
    <div >
    <Countries countries= {this.state.countries}  handleChange={this.handleChange}></Countries>
    <Cities cities= {this.state.cities} ></Cities>

    </div>
  );
}
}



export default App;
