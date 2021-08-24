import React from 'react';
import {connect} from 'react-redux';

class MovieDetails extends React.Component {

    render(){
        const {movies, movieNum} =this.props;
        if (movieNum) {
            const{title, releaseDate, rating} = movies[movieNum]
            return(
                <div>
                    <div>
                    <h2>Movie Details</h2>
                        <p>{title}</p>
                        <p>{releaseDate}</p>
                        <p>{rating}</p>
                    </div>
                </div>
            )
        }
        else{
            return(<div>
                <h2>Movie Details</h2>
            </div>)
        }
        
    }
}
const mapStateToProps = (state) =>{
  console.log(state)
    return{
        movies:state.movies,
        movieNum: state.movieNum
    }
}

export default connect(mapStateToProps,null)(MovieDetails);