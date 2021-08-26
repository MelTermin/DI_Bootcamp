import {Switch, Route} from 'react-router-dom';
import React from 'react';
import Navbar from './Components/Navbar';
import Movie from './Components/Movie';
import Search from './Components/Search';
import './App.css';

class App extends React.Component  {

  render() {
  return (
    <div >
  
    <Navbar/>
    <Switch>
        <Route exact path="/" children={<Search/>} />
        <Route exact path="/movie/:id" children={<Movie/>} />
      </Switch>
   
  
    </div>
  );
}
}

export default App;