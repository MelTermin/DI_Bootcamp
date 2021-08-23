import React from 'react'
import {connect} from 'react-redux';
import {plusOne,minusOne} from '../redux/actions'

class Counter extends React.Component {
  render(){
    const {counter,plusOne,minusOne} = this.props
    console.log(this.props)
    return (
      <div >
          {counter}
          <button onClick={plusOne}>Plus 1</button>
          <button onClick={minusOne}>Minus 1</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  //this function helps me to listen what piece of state I need to listen to send as props
  return {
    counter: state.counter
  }
}
const mapDispatchToProps = (dispatch) => {
 //this function helps tell me what props I need to listen that action that needs to dispatched
  return {
    plusOne: () => dispatch(plusOne()),
    minusOne: () => dispatch(minusOne())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);

//takes two parameters:
// what state, action should the counter listen to