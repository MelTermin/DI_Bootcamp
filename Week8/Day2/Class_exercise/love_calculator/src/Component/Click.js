import {connect} from 'react-redux';
import {fetchNames} from '../redux/actions'


const Click= (props) => {
  
  return(
    <div>
<button onClick= {()=>props.dispatch(fetchNames(props.firstname,props.secondname))}>Send</button>
    </div>
  )

}

const mapStateToProps = (state) => {
  return{
    firstname: state.firstname,
    secondname:state.secondname
  }
}



export default connect(mapStateToProps) (Click)