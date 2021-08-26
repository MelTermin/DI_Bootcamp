import {connect} from 'react-redux'
import { fetchMovie } from '../redux/actions'
import { Link } from 'react-router-dom';

const DetailsCard = (props)=> {
  const {movies, imdbID}=props
  console.log(movies, imdbID)
  
  return (
    <div >
       {
    movies.map((item) => {
      return (//dont forget to return it//
      <div key= {item.imdbID}  className="details-card">
        <p>{item.Title}</p>
       <img src= {item.Poster} alt="movies" className="movie-posters"></img>
       <Link className="links" to="/movie/:id">
        <button id= {item.imdbID} className="details-btn"
        onClick= {(e) => props.dispatch(fetchMovie(e.target.id))}
        > Movie Details</button>
      </Link>
      </div>)
    })
  }
    
    </div>
  )
  }

  const mapStateToProps = (state) => {
  
    return {
      movies:state.movies
    }
  }
  
  export default connect (mapStateToProps) (DetailsCard)