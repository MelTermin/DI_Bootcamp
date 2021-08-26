import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

const Movie = (props)=> {
  const {movie}=props
  return (
    <div>
    <div className="container">
      
      <div className="movie-poster">
      <img  src= {movie.Poster} alt="Movie-iamge"></img>
      </div>
     
      <div className="details">
      <p>{movie.Title}</p>
      <p>Genre: {movie.Genre}</p>
      <p>Released: {movie.Released}</p>
      <p>Rating: {movie.imdbRating}</p>
      <p>Director: {movie.Director}</p>
      <p>Writer: {movie.Writer}</p>
      <p>Actor: {movie.Actors}</p>
      </div>

      </div>


      <div className="about">About: {movie.Plot}</div>
      <div className="button-movie-links">
      <a  className="links-movie" href={'https://www.imdb.com/title/' + movie.imdbID}
        target="_blank"
        rel="noopener noreferrer">View on IMDB</a>
     
      <Link to="/"  className="links-movie" > Go Back To Search </Link>
      </div>
      


    </div>
    
  )
  }

  const mapStateToProps = (state) => {
  
    return {
      movie:state.movie
    }
  }
  
  export default connect (mapStateToProps) (Movie)