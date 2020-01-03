import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Menu from "../components/Menu";
import Home from "../components/Home";
import Search from "../components/Search";
import User from "../components/User";
import BrowseFavorites from "../components/BrowseFavorites";
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
      // persistedFavorites: []
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
    console.log(e);
    this.setState({
      loggedInUsername: e
    });
  };

  handleAddFavorite = e => {
    console.log("in App.js/handleAddFavorite", e);
    let organizedFavoritesByCandidateId = [];
    this.state.loggedInFavorites.map(favorite => {
      organizedFavoritesByCandidateId.push(favorite.candidate.cid);
    });
    console.log(organizedFavoritesByCandidateId);
    if (!organizedFavoritesByCandidateId.includes(e.candidate.cid)) {
      console.log("it's not in here! ok to add.");
      this.setState({
        loggedInFavorites: this.state.loggedInFavorites.concat(e)
      });
    }
  };

  handleBrowseFavorites = e => {
    console.log(e);
    this.setState({
      ...this.state,
      loggedInFavorites: e
    });
  };

  // handleNewUserFavorite = e => {
  //   console.log("in App.js/handleNewUserFavorite", e);
  //   if (!this.state.loggedInFavorites.includes(e)) {
  //     let uniqueFavorites = [];
  //     this.state.loggedInFavorites.map(favorite => {
  //       if (!uniqueFavorites.includes(favorite)) {
  //         return uniqueFavorites.push(favorite);
  //       }
  //     });
  //     console.log("uniqueFavorites...", uniqueFavorites);
  //     this.setState({
  //       loggedInFavorites: this.state.loggedInFavorites.concat(e)
  //     });
  //   }
  //   // this.handlePersistFavorites();
  // };

  // handlePersistFavorites = e => {
  //   let uniqueFavorites = [];
  //   this.state.loggedInFavorites.map(favorite => {
  //     if (!uniqueFavorites.includes(favorite)) {
  //       return uniqueFavorites.push(favorite);
  //     }
  //   });
  //   this.setState({
  //     persistedFavorites: uniqueFavorites
  //   });
  // };

  handleDeletedFavorite = favorite => {
    console.log(favorite);
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
