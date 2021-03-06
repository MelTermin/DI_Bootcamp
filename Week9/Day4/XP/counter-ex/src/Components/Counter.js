import {connect} from 'react-redux'
import {increment,decrement} from '../redux/actions'

const Counter = (props)=> {
  const {counter,increment,decrement}=props
  
  const incrementIfOdd = () => {
    if (counter % 2 !== 0) {
      console.log(counter,increment)
      increment();
    }
  }

  const incrementAsync = () => {
    setTimeout(increment, 1000);
  }
  return (
    <div>
      <p>Clicked {counter} times</p>
      <button onClick= {increment}>+</button>
      <button onClick= {decrement}>-</button>
      <button onClick= {incrementIfOdd}>Increment if odd</button>
      <button onClick= {incrementAsync}>Increment async</button>
    </div>
  )
  }

  const mapStateToProps = (state) => {
    return {
      counter: state.counter
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      increment: () => dispatch(increment()),
      decrement: () => dispatch(decrement())
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps) (Counter)