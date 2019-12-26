import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <NavLink to="/" exact>
          [ Home ]
        </NavLink>
        <NavLink to="/search" exact>
          [ Search ]
        </NavLink>
        <NavLink to="/user" exact>
          [ User ]
        </NavLink>
        <NavLink to="/browsefavorites" exact>
          [ Browse Favorites ]
        </NavLink>
      </div>
    );
  }
}

export default NavBar;
