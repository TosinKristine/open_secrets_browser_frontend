import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserInfo from "./UserInfo";
import Search from "./Search";
import Favorites from "./Favorites";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        {/* <Router>
          <Route exact path="/search" component={Search} />
        </Router> */}
        {/* <UserInfo />
        <Search />
        <Favorites /> */}
      </div>
    );
  }
}

export default Home;
