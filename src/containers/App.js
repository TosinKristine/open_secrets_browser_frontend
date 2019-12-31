import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
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
      loggedInId: "",
      loggedInFavorites: [],
      loggedInUsername: ""
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

  handleDelete = () => {
    this.setState({ loggedIn: false });
  };

  handleApp = e => {
    this.setState({
      loggedInFavorites: e
    });
  };

  handleUsername = e => {
    this.setState({
      loggedInUsername: e
    });
  };

  // handleFavorites = e => {
  //   this.setState({
  //     loggedInFavorites: e
  //   });
  // };

  render() {
    return (
      <div>
        <Router>
          {this.state.loggedIn !== false ? (
            <div>
              <NavBar loggedIn={this.state.loggedIn} />
              <Route
                exact
                path="/"
                render={props => (
                  <Home
                    {...props}
                    handleApp={this.handleApp}
                    loggedIn={this.handleLoggedIn}
                    loggedInEmail={this.handleLoggedInEmail}
                    persistLogIn={this.state.loggedIn}
                    persistLogInEmail={this.state.loggedInEmail}
                    loggedInId={this.handleLoggedInId}
                    username={this.handleUsername}
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
                  <User
                    {...props}
                    userEmail={this.state.loggedInEmail}
                    deleted={this.handleDelete}
                    userFavorites={this.state.loggedInFavorites}
                    username={this.state.loggedInUsername}
                    userID={this.state.loggedInId}
                  ></User>
                )}
              ></Route>
              <Route
                exact
                path="/browsefavorites"
                render={props => (
                  <BrowseFavorites
                    {...props}
                    userId={this.state.loggedInId}
                    userFavorites={this.state.loggedInFavorites}
                  ></BrowseFavorites>
                )}
              ></Route>
            </div>
          ) : (
            <div>
              <NavBar loggedIn={this.state.loggedIn} />
              <Redirect to="/"></Redirect>
              <Route
                exact
                path="/"
                render={props => (
                  <Home
                    {...props}
                    handleApp={this.handleApp}
                    loggedIn={this.handleLoggedIn}
                    loggedInEmail={this.handleLoggedInEmail}
                    persistLogIn={this.state.loggedIn}
                    persistLogInEmail={this.state.loggedInEmail}
                    loggedInId={this.handleLoggedInId}
                    username={this.handleUsername}
                  ></Home>
                )}
              ></Route>
            </div>
          )}
        </Router>
      </div>
    );
  }
}

export default App;
