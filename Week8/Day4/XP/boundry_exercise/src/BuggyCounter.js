import React from 'react';

class BuggyCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      errorInfo: null
    }
  }

  componentDidCatch(error, errorInfo){
    this.setState({
      error:error,
      errorInfo:errorInfo
    })
  }

  render(){
    if(this.state.errorInfo){
      console.log(this.state.errorInfo);
      console.log();
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details>
          <sumarry>Details</sumarry>
            {this.state.error && this.state.error.toString()}
            <br/>
            {this.state.errorInfo.componentStack} 
          </details>
          
        </div>
      )
    }
    return this.props.children
  }
}
export default BuggyCounter