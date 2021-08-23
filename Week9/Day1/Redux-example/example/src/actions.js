export const changeTextOne= (value) => {
console.log()
  //actions are objects we are returning so in the reducer we put in reducer in action= {} an empty object
  return {
    type:'TEXT_ONE',
    payload:value
  }

}

export const changeTextTwo= (value) => {
  return {
    type:'TEXT_TWO',
    payload:value
  }

}