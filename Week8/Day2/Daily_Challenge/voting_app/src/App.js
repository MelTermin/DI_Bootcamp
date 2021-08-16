import React from 'react';
import Voting from './Components/Voting';
import './App.css';

class App extends React.Component  {
  constructor(){
    super();
    this.state = {
      languages : [
        {name: "Php", votes: 0},
        {name: "Python", votes: 0},
        {name: "JavaSript", votes: 0},
        {name: "Java", votes: 0}
    ]
    }

  }
  render() {
    return this.state.languages.map((item, i) => {
      return (
        <Voting name={item.name} votes={item.votes} />
      );
    });
  }
}
 

export default App;
