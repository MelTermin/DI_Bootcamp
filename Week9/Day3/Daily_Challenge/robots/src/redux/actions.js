

//this is for the search box//
export const setSearchField = (text) => {
  return {
    type:'CHANGE_SEARCH_FIELD',
    payload:text // to send a data is needed to the reducer, meaning whatever the user is typing
  }
}

export const fetchRobots = () => (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => {
    console.log(data)
    dispatch({type:'ROBOTS', payload:data})
  })
  .catch(e => {
    console.log(e);
  })
}