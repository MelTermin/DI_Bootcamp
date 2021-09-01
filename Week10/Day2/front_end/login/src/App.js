import Registration from './Components/Registration';
import Login from './Components/Login';
import Main from './Components/Main'
import React from 'react';
import {Switch, Route,Link} from 'react-router-dom';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      user: {
        id: '',
        name: '',
        email:'',
        joined:''
      },
      token: null
    }
  }
  loadUser = (data) => {
    this.setState({
      user: {
        id: data.user.id,
        name: data.user.name,
        email: data.user.email,
        joined: data.user.joined
      },
      token: data.token
    })
  }
  render(){
    const {user,token} = this.state;
    return (
      <>
        <nav>
          <Link to='/' style={{margin:'5px'}}>Dashboard</Link>
          <Link to='/register' style={{margin:'5px'}}>Register</Link>
         
        </nav>
        <Switch>
          <Route path='/' component={Main} exact />
          <Route path='/register' render={(props) => <Registration {...props} loadUser={this.loadUser}/> }/>
          <Route path='/login' render={(props) => <Login {...props} loadUser={this.loadUser}/> } />
        </Switch>
      </>
    )
  }
}

export default App;