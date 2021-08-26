import {connect} from 'react-redux'
import {searchMovie,fetchMovies} from '../redux/actions'
import DetailsCard from './DetailsCard'

const Search = (props)=> {
  const {searchMovie,fetchMovies,text,movies}=props

const handleClick= (e) => {
  e.preventDefault()
  console.log(text)
  fetchMovies(text)
  console.log("clicked")
}

console.log(movies)
 
  return (
    <div>
    <form >
    <h1>Search for a movie,TV series..</h1>
     <input type="text" placeholder="Please type a movie" onChange= {searchMovie}></input>
     <button onClick= {handleClick} className="search-btn" >Search</button>
     </form>
     <div>
       <DetailsCard></DetailsCard>
     </div>
    </div>
  )
  }

  const mapStateToProps = (state) => {
    console.log(state)
    return {
      text: state.text,
      movies:state.movies
    }
  }
  const mapDispatchToProps = (dispatch) => {
 
    return{
      searchMovie: (e) => dispatch(searchMovie(e.target.value)),
      fetchMovies: (text) => dispatch(fetchMovies(text))
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps) (Search)