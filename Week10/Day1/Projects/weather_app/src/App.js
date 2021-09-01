import Home from './Components/Home';
// import Favourites from './Components/Favourites';
import Navbar from './Components/Navbar';
import Initial from './Components/Initial';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
    <div >
      <Navbar/>
      <Switch>
      <Route path="/" exact component= {Initial} />
        <Route path="/home" exact component= {Home} />
        {/* <Route path="/favourites" exact component= {Favourites} /> */}
      </Switch>
    </div>
    </Router>
  );
}

export default App;
