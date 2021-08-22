import React from 'react';
import Form from './Components/Form'
import './App.css';

class App extends React.Component  {
  constructor(){
    super();
    this.state = {
      fname:"",
      lname:"",
      number:"",
      email:"",
      isSubmitted:false
    }
  }

  handleChange= (event) => {
    this.setState({[event.target.name]:event.target.value})
  }


  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      isSubmitted: true
  })
    console.log(this.state)
  
  }

  handleReset= ()=> {
    this.setState({
        fname: '',
        lname: '',
        number: '',
        email: '',
        isSubmitted: false
    })
  }
  render() {
    const {fname,lname, email,number,isSubmitted}=this.state
  return (
    <div >
      <Form fname= {fname} lname= {lname} email= {email} number= {number} handleChange= {this.handleChange} handleSubmit= {this.handleSubmit} isSubmitted= {isSubmitted} handleReset= {this.handleReset}></Form>

    </div>
  );
}
}

export default App;