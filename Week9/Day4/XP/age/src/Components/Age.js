import {connect} from 'react-redux'
import {ageUp,ageDown} from '../redux/actions'

const Age = (props)=> {

  const {age, ageUp,ageDown}=props
  return (
    <div>
      <h1>Your Age {age}</h1>
      <button onClick= {ageUp}>Age UP</button>
      <button onClick= {ageDown}>Age DOWN</button>
    </div>
  )
  }

  const mapStateToProps = (state) => {
    return {
      age: state.age
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      ageUp: () => dispatch(ageUp()),
      ageDown: () => dispatch(ageDown())
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps) (Age)