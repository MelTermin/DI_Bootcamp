const initState = {
  //I put this.state in here
  counter: 0,
}

export const reducer = (state=initState,action={}) => {
  console.log('state', state);
  console.log(action.type)
  switch (action.type) {
    case 'PLUS_ONE':
    return {...state, counter: state.counter + 1 }
    //this is where I actually update the state
      case 'MINUS_ONE':
    return {...state, counter: state.counter - 1}
    
     default:
    return {...state}
  }
}

