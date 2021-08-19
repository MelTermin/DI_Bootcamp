import React from 'react';
import Superheroes from './Components/Superheroes';
import Header from './Components/Header'
import Card from './Components/Card';
import './App.css';

class App extends React.Component  {
  constructor(){
    super();
    this.state = {
      score:0,
      topScore:0,
      Superheroes:Superheroes,
      clicked: []//I will put the clicked image id in here//
    }
  }
  handleClick = (e) => {
    let {score} = this.state;
    // console.log(e.target.id)
    this.setState({Superheroes:Superheroes.sort((a, b) => 0.5 - Math.random())});
      if (!this.state.clicked.includes(e.target.id)) {
        this.state.clicked.push(e.target.id);
        this.setState({score:score+1});
      } else {
        this.setState({topScore:score})
        this.setState({score:0});
      }
   }
  render() {
  return (
    <div > 
      <Header score= {this.state.score} topScore= {this.state.topScore}></Header>
      <Card superheroes= {this.state.Superheroes} handleClick= {this.handleClick}></Card>

    </div>
  );
}
}

export default App;
