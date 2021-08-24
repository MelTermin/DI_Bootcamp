

//this is for the search box//
export const setSearchField = (text) => {
  return {
    type:'CHANGE_SEARCH_FIELD',
    payload:text // to send a data is needed to the reducer, meaning whatever the user is typing
  }
}