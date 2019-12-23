import React, { Component } from "react";
import UserInfo from "./UserInfo";
import Search from "./Search";
import Favorites from "./Favorites";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <UserInfo />
        <Search />
        <Favorites />
      </div>
    );
  }
}

export default Home;
