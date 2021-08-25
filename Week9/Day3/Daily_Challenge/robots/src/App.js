import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import SearchBox from './Components/SearchBox';
import CardList from './Components/CardList';
import {setSearchField} from './redux/actions'
import {fetchRobots} from './redux/actions'

class App extends React.Component  {
  constructor(){
    super();
    this.state = {
    
    }

  }

  componentDidMount() {
    this.props.fetchRobots();
  }



  render() {

    const {searchField,onSearchChange,robots}=this.props
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
   searchField: state.searchField,
   robots: state.robots
   //in the reducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
   onSearchChange:(event) => dispatch(setSearchField(event.target.value)),
   fetchRobots: () => dispatch(fetchRobots())
  }
}

export default connect (mapStateToProps,mapDispatchToProps) (App);
