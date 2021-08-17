import React from 'react';
import Form from './Components/Form'
import Result from './Components/Result'
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      firstname:"",
      lastname:"",
      age:"",
      gender:"",
      destination:"",
      nutfree:"",
      Lactosefree:"",
      Vegan:""
      
    }

  }

  handleChange = (e) => {
    const { name, value } = e.target

    this.setState({ [name]: value })
}

  render(){
    
    return (
      <div >
        <Form handleChange={this.handleChange} ></Form>
        <Result details={this.state}></Result>
      </div>
    );
  }
}

export default App;
