import React from 'react';
import './App.css';
import Countries from './Components/Countries';

class App extends React.Component  {
  constructor(){
    super();
    this.state = {
      suggestions:[],
      text:""
 
    }
  }


  filter = (e) => {
    let suggestions = Countries.filter(country => country.toLowerCase().includes(e.target.value));
    this.setState({suggestions:suggestions});
}

  handleChange= (event) => {
    this.setState( {text:event.target.value})
  }
  render() {
  return (
    <div >
      <h1>Auto Completed</h1>
      <input type="text" placeholder="please type a country" onChange={this.filter} onClick={this.handleChange}></input>
      <ul>
      {
          this.state.suggestions.map((item,i) => {
          return <li key={i} onClick={this.handleChange}>{item}</li>
          })
      }
          </ul>
        <div>Suggestions: {this.state.suggestions.length}</div>
    </div>
  );
}
}

export default App;