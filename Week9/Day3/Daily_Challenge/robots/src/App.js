import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import SearchBox from './Components/SearchBox';
import CardList from './Components/CardList';
import {setSearchField} from './redux/actions'

class App extends React.Component  {
  constructor(){
    super();
    this.state = {
      robots: [],
    }

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ robots: users})});
  }



  render() {
    const {robots}=this.state
    const {searchField,onSearchChange}=this.props
    const filteredRobots=robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
  
  
    return (
    <div >
        <h1 >RoboFriends</h1>
        <SearchBox searchChange={onSearchChange}/>
        <CardList robots={filteredRobots} />
    </div>
  );
}
}

const mapStateToProps = (state) => {
  return {
   searchField: state.searchField
   //in the reducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
   onSearchChange:(event) => dispatch(setSearchField(event.target.value))

  }
}

export default connect (mapStateToProps,mapDispatchToProps) (App);
