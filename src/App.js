import React from "react";
import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./Search";

class App extends React.Component {
  render() {
    return (
      <div>
        <Home />
        <Router>
          <Route exact path="/search" component={Search} />
        </Router>
      </div>
    );
  }
}

export default App;
