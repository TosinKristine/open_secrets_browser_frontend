import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Menu from "../presentational/Menu";
import Home from "./Home";
import Search from "./Search";
import User from "./User";
import BrowseFavorites from "./BrowseFavorites";
import "../App.css";
require("dotenv").config();

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

  handleAddFavorite = e => {
    let organizedFavoritesByCandidateId = [];
    this.state.loggedInFavorites.map(favorite => {
      organizedFavoritesByCandidateId.push(favorite.candidate.cid);
    });
    if (!organizedFavoritesByCandidateId.includes(e.candidate.cid)) {
      this.setState({
        loggedInFavorites: this.state.loggedInFavorites.concat(e)
      });
    }
  };

  handleBrowseFavorites = e => {
    this.setState({
      ...this.state,
      loggedInFavorites: e
    });
  };

  handleDeletedFavorite = favorite => {
    this.setState({
      loggedInFavorites: this.state.loggedInFavorites.filter(each_favorite => {
        return each_favorite !== favorite;
      })
    });
  };

  render() {
    return (
      <div className="appBody">
        <Router>
          {this.state.loggedIn !== false ? (
            <div>
              <Menu />
              <Route
                exact
                path="/"
                render={props => (
                  <Home
                    {...props}
                    loggedInUsername={this.state.loggedInUsername}
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
                  <Search
                    {...props}
                    userId={this.state.loggedInId}
                    addFavorite={this.handleAddFavorite}
                  ></Search>
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
                    newUsername={this.handleUsername}
                    newUserEmail={this.handleLoggedInEmail}
                    deletedFavorite={this.handleDeletedFavorite}
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
                    addUserFavorites={this.handleBrowseFavorites}
                  ></BrowseFavorites>
                )}
              ></Route>
            </div>
          ) : (
            <div>
              <Redirect to="/"></Redirect>
              <Route
                exact
                path="/"
                render={props => (
                  <Home
                    {...props}
                    loggedInUsername={this.state.loggedInUsername}
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
