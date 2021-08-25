
let initialState= {
  firstname:"",
  secondname:"",
  results:{}
}

export const reducer = (state=initialState, action= {})=> {

  switch(action.type) {
    case 'SELECT_NAME_ONE':
      return {...state, firstname:action.payload }

      case 'SELECT_NAME_SECOND':
      return {...state, secondname:action.payload }

      case 'RESULTS':
        return {...state, results:action.payload }

        default:
          return {...state}
  }

}