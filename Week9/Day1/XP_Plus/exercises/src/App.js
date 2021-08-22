import React from 'react';
import PostList from './Components/PostList'
import { details } from './Components/Details';
import './App.css';

class App extends React.Component  {
  constructor(){
    super();
    this.state = {
 
    }

  }

  async componentDidMount() {
    
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key1: 'myusername',
        email: 'mymail@gmail.com',
        name: 'Isaac',
        lastname: 'Doe',
        age: 27 })
    };
    const response = await fetch('	https://webhook.site/902ce836-c3d4-41ea-807f-0b3353092515', requestOptions);
    const data = await response.json();
    this.setState({ postId: data.id });
}
  render() {
  return (
    <div >
      <PostList details= {details}></PostList>
      <button>Press me to send some data</button>

    </div>
  );
}
}

export default App;
