import { Switch, Route, NavLink } from "react-router-dom";

import './App.css';
import React from 'react'

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>An error has occured.</h1>;
    }

    return this.props.children;
  }
}

const Home = () => <h3>Home</h3>;

const Profile = () => <h3>Profile Screen</h3>;

const Shop = () => {
  throw new Error("Error during render");
};

const App= ()=> {
  return (
    <div >
      <div className="container">
      <nav className="nav nav-pills">
        <NavLink exact className="nav-link" activeClassName="active" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" activeClassName="active" to="/profile">
          Profile
        </NavLink>
        <NavLink className="nav-link" activeClassName="active" to="/shop">
          Shop
        </NavLink>
      </nav>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <ErrorBoundary>
              <Home />
            </ErrorBoundary>
          )}
        />
        <Route
          path="/profile"
          render={() => (
            <ErrorBoundary>
              <Profile />
            </ErrorBoundary>
          )}
        />
        <Route
          path="/shop"
          render={() => (
            <ErrorBoundary>
              <Shop />
            </ErrorBoundary>
          )}
        />
      </Switch>
    </div>
    </div>
  );
}

export default App;
