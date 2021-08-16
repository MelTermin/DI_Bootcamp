import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super(); //this initialized the parent component
    this.state= {//will hold all the class data holds
      name:'Dan',
      robots:[1,2,3],
      counter:0,
      text:""

    } 
  }

  //in class we have methods no need const

  //Life cycle method in Class
  //3 stages;
  //1-Mounting- rendering the time //we intialize with constructor
  //2-Updatin-interact with the user//then render
//  3-Unmount deleting a component, or display none


  changeName= () => {
  this.setState({name:"Taltuş"})//this.setstate refers to this.state at top
  }

  plusOne= (value) => {
    // let {counter} = this.state
    // this.setState({counter+1})
    this.setState({counter:this.state.counter+value})
  }

  minuesOne=() => {
    this.setState({counter:this.state.counter-1})
  }

  handleInput = (event) => {
    this.setState( {text:event.target.value})
  }
  
  render () {
    //deconstructing
    const {name,robots, counter, text}=this.state
  return (
    <div >
      {/* {this.state.name} */} {name} {robots}
     
      <button onClick={this.changeName} >Send</button>
      <br></br>
      <br></br>
      <br></br>
      {counter}
      <button onClick={()=>this.plusOne(5)} >Plus One</button>
      <button onClick={this.minuesOne} >Minus One</button>
      <br></br>
      <br></br>
      <br></br>
      <input type="text" onChange= {this.handleInput}></input>
      <div>{text}</div>
  
    </div>
  );
}
}
export default App;
