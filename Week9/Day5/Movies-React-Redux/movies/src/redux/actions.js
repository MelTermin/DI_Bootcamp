//from the input//

export const searchMovie = (text) => {

  return {
    type: 'SEARCH_MOVIE',
    payload:text
  }
}

//because I am fetching in here I can dispatch in the fetch

export const fetchMovies= (text) => (dispatch) => {
  fetch(`https://www.omdbapi.com/?apikey=18005281&s=${text}`)
  .then(res => res.json())
  .then(data => {
    console.log(data.Search)//because this starts with search
    dispatch({type:'FETCH_MOVIES', payload:data.Search})
  })
  .catch(e => {
    console.log(e);
  })
}

export const fetchMovie= (id) => (dispatch) => {
  fetch(`https://www.omdbapi.com/?apikey=18005281&s&i=${id}`)
  .then(res => res.json())
  .then(data => {
    dispatch({type:'FETCH_MOVIE', payload:data})
  })
  .catch(e => {
    console.log(e);
  })
}