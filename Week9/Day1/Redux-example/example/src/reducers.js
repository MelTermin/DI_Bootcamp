let initState = {
  //pu the this.state in here//
  textone:"Melissa",
  texttwo:"Selin"
}


export const reducer = (state=initState,action={}) => {
  console.log(initState,state)
  console.log({textone:action.payload})
  switch(action.type) {
  
    case 'TEXT_ONE':
      return{...state, textone:action.payload}

      case 'TEXT_TWO':
        return{...state, texttwo:action.payload}
    
      default:
        return {...state}
  }
  // return {...state} //we are cloning the initstate into the state parameter


}