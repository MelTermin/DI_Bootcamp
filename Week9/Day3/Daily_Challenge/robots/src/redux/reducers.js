const initialState ={
  searchField: ''
}

export const searchRobots = (state=initialState,action= {})=> {
  switch(action.type) {
    case 'CHANGE_SEARCH_FIELD':
      return {...state, searchField:action.payload}
      //this return is telling me that i recieved an action called change_search_field and return a new state with action.payload whatever the user entered in the seachbox
      default :
      return state
}
   
}