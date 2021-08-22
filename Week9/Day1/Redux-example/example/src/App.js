import React from 'react';
import {connect} from 'react-redux';
import {changeTextOne,changeTextTwo} from './actions'
import './App.css';

class App extends React.Component  {
  constructor(){
    super();
    this.state = {
      // textone:"Melissa",
      // texttwo:"Selin"
 
    }

  }

  // handleChange= (e) => {
  //   this.setState({textone:e.target.value})
  // }
  render() {
    // const {textone,texttwo}=this.state
    
  return (
    <div >
      <h1>Simple Redux Example </h1>
      <p>Here is property one: {this.props.textone}</p>
      <p>Here is property two: {this.props.texttwo}</p>
      <p>Change input one</p>
      One<input type="text"  onChange={this.props.handleChange}></input>
      Two<input type="text"  onChange={this.props.handleChangeTwo}></input>


    </div>
  );
}
}

const mapStateToProps= (state) => {
  return{
    textone:state.textone,
    texttwo:state.texttwo
  }
}
const mapDispatchToProps= (dispatch) => {
  return {
    handleChange:(event)=> dispatch(changeTextOne(event.target.value)),
    handleChangeTwo:(event)=> dispatch(changeTextTwo(event.target.value))
  
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(App);
