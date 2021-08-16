import React from 'react';
import Click from './Component/Click';
import Results from './Component/Results';
import Input from './Component/Input';

import './App.css';

 class App extends React.Component {
  constructor(){
    super();
    this.state = {
    firstname:"",
    secondname:"",
    results:{}
    }
  }
  handleFirstInput= (event)=> {
    this.setState( {firstname:event.target.value})
  }

  handleSecondInput= (event)=> {
    this.setState( {secondname:event.target.value})
  }

  handleClick= () => {
    const{firstname,secondname}=this.state;
    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${firstname}&sname=${secondname}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "69e6ee80c3msha0293102a2b1b69p10242djsnb05d1985bf4c",
		"x-rapidapi-host": "love-calculator.p.rapidapi.com"
	}
})
.then(response => {
	return response.json();
})
.then(data=>{
  console.log(data);
  this.setState({results:data})
})
.catch(err => {
	console.error(err);
});
    

  }
  render() {
    return <div>
      <Input handleSecondInput= {this.handleSecondInput} secondname= {this.state.secondname} handleFirstInput= {this.handleFirstInput} firstname={this.state.firstname}></Input>
      <Click handleClick={this.handleClick}></Click>
      <Results results={this.state.results}></Results>
    </div>
  }
}

export default App

