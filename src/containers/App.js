import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import Home from "../components/Home";
import Search from "../components/Search";
import User from "../components/User";
import BrowseFavorites from "../components/BrowseFavorites";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <NavBar />
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/search" component={Search}></Route>
            <Route exact path="/user" component={User}></Route>
            <Route
              exact
              path="/browsefavorites"
              component={BrowseFavorites}
            ></Route>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
