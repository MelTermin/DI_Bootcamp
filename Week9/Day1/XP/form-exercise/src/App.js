import React from 'react';
import  Form from './Components/Form'
import './App.css';

class App extends React.Component  {
  constructor(){
    super();
    this.state = {
      title:"",
      author:"",
      genre:"",
      year_published:""
 
    }
  }

    handleChange= (event) => {
    this.setState({[event.target.name]:event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state)
    let form=document.getElementsByTagName("form")[0]
    let result=document.getElementById("results")
  
 
   result.innerHTML="Succesfully submitted"
   form.reset()
  }
  render() {
    const {title, author, genre, year_published}=this.state
  return (
    <div >
      <Form title= {title} author={author} genre= {genre} year_published= {year_published} handleChange={this.handleChange} handleSubmit= {this.handleSubmit}></Form>

    </div>
  );
}
}

export default App;
