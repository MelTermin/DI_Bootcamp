import React from 'react';
import Countries from './Components/Countries'
import Cities from './Components/Cities'
import './App.css';

class App extends React.Component  {
  constructor(){
    super();
    this.state = {
      countries:[],//always check the api, I am getting an array I can check in the server side
      cities:[],
      page:""
    }
  }

 
  componentDidMount = () => {
    fetch('http://localhost:5000/countries')
    .then(res => res.json())
    .then(data => {
      // console.log(data)
     this.setState({countries:data})//you need change data to call this function setState you call render. ComponentDidMount updates the data
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
    console.log("countries", this.state.countries)//this will not be empty fills with data
    //I can deconstruct it const {countries}:this.stare


  return (
    <div >
      <Countries countries= {this.state.countries}  handleChange={this.handleChange}></Countries>
      <Cities cities= {this.state.cities} ></Cities>
    </div>
  );
}
}



export default App;
