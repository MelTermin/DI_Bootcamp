export const MOVIE_SELECTED = 'MOVIE_SELECTED'

export const handleMovie = (value) => {
  console.log(MOVIE_SELECTED)
    return{
        type:MOVIE_SELECTED,
        payload: value
    }
}

//the purpose of this function get the value of the id that is why we used payload:value