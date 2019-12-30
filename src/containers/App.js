import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import Home from "../components/Home";
import Search from "../components/Search";
import User from "../components/User";
import BrowseFavorites from "../components/BrowseFavorites";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      loggedInEmail: "",
      loggedInId: ""
    };
  }

  handleLoggedIn = e => {
    this.setState({ loggedIn: e });
  };
  handleLoggedInEmail = e => {
    this.setState({ loggedInEmail: e });
  };

  handleLoggedInId = e => {
    this.setState({ loggedInId: e });
  };

  render() {
    return (
      <div>
        <Router>
          <div>
            <NavBar loggedIn={this.state.loggedIn} />
            <Route
              exact
              path="/"
              render={props => (
                <Home
                  {...props}
                  loggedIn={this.handleLoggedIn}
                  loggedInEmail={this.handleLoggedInEmail}
                  persistLogIn={this.state.loggedIn}
                  persistLogInEmail={this.state.loggedInEmail}
                  loggedInId={this.handleLoggedInId}
                ></Home>
              )}
            ></Route>
            <Route
              exact
              path="/search"
              render={props => (
                <Search {...props} userId={this.state.loggedInId}></Search>
              )}
            ></Route>
            <Route
              exact
              path="/user"
              render={props => (
                <User {...props} userEmail={this.state.loggedInEmail}></User>
              )}
            ></Route>
            <Route
              exact
              path="/browsefavorites"
              render={props => (
                <BrowseFavorites
                  {...props}
                  userId={this.state.loggedInId}
                ></BrowseFavorites>
              )}
            ></Route>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
