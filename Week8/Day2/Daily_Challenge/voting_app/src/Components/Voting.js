import React from 'react';

class Voting extends React.Component {
  state = {
    votes: this.props.votes
  }

  increment = () => {
    this.setState({
      votes: this.state.votes+1
    })
  }

  render() {
      return (
        <div className="boxes">
          <div> {this.state.votes}</div>
          <div> {this.props.name} </div> 
          <button onClick={this.increment}>+</button>
        </div>
      );
  }
}
export default Voting