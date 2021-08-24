import React from 'react'
import MovieDetails from './Components/MovieDetails'
import MovieList from './Components/MovieList'
import './App.css';

const App = () => {
  return (
    <div >
      <MovieList></MovieList>
      <MovieDetails></MovieDetails>
    </div>
  );
}

export default App;
