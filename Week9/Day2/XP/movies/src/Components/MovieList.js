import React from 'react';
import {connect} from 'react-redux';
// import {moviesReducer} from '../redux_daily/reducers_daily';
import {handleMovie} from '../redux/actions'

class MovieList extends React.Component {

    render(){
        const {movies, handleMovie} =this.props;
        console.log(movies, handleMovie)
        return(
            <div>
                <div>
                    <h1>Movies</h1>
                    {movies.map((element, i) => {
                        return (
                            <div key={i}>
                            <p>{element.title}</p>
                            <button id={i} onClick={handleMovie}>Details</button>
                            </div>
                        )
                    })}

                {console.log(this.props.movies)}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
  console.log(state)
    return{
        movies:state.movies
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        handleMovie: (e) => dispatch(handleMovie(e.target.id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MovieList);