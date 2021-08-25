import {connect} from 'react-redux'
import {setFirstInput, setSecondInput}  from '../redux/actions'


const Input= (props) => {
  const {firstname,secondname,setFirstInput,setSecondInput}=props
  return(
    <div>
      <input type="text" onChange= {setFirstInput}/>{firstname}
      <br></br>
      <input type="text" onChange= {setSecondInput}/>{secondname}
    </div>
  )

}

const mapStateToProps = (state) => {
  return  {
    firstname: state.firstname,
    secondname:state.secondname
  }
}

const mapDispatchToProps = (dispatch) => {
  return  {
    setFirstInput: (e) => dispatch(setFirstInput(e.target.value)),
    setSecondInput: (e) => dispatch(setSecondInput(e.target.value))
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (Input)
