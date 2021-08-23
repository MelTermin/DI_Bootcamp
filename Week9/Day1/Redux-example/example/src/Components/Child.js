import {connect} from 'react-redux'
import { changeTextOne } from '../actions'

const Child = (props)=> {
  const {pOne,pTwo,changeOne}=props
  return (
    <div>
      <p> textone: {pOne}</p>
      <p> texttwo: {pTwo}</p>
      <input type="text" onChange= {changeOne}></input>
    </div>
  )
  }

  const mapStateToProps =(state)=> {
    return{
      pOne:state.textone,
      pTwo:state.texttwo
    }
  }

  const mapDispatchToProps=(dispatch) => {
    return {
      changeOne:(e)=>dispatch(changeTextOne(e.target.value))
    }
  }
  
  export default connect (mapStateToProps, mapDispatchToProps) (Child)