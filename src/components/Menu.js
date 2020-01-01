import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import { Menu } from "semantic-ui-react";

export default class MenuExampleBasic extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        >
          <NavLink to="/" exact>
            Home
          </NavLink>
        </Menu.Item>

        <Menu.Item
          name="search"
          active={activeItem === "search"}
          onClick={this.handleItemClick}
        >
          <NavLink to="/search" exact>
            Search
          </NavLink>
        </Menu.Item>

        <Menu.Item
          name="browsefavorites"
          active={activeItem === "browsefavorites"}
          onClick={this.handleItemClick}
        >
          <NavLink to="/browsefavorites" exact>
            Browse Favorites
          </NavLink>
        </Menu.Item>

        <Menu.Item
          name="user"
          active={activeItem === "user"}
          onClick={this.handleItemClick}
        >
          <NavLink to="/user" exact>
            User
          </NavLink>
        </Menu.Item>
      </Menu>
    );
  }
}

// class NavBar extends Component {
//   checkLoggedIn = () => {
//     if (this.props.loggedIn) {
//       return (
//         <div className="navbar">
//           <NavLink to="/" exact>
//             [ Home ]
//           </NavLink>
//           <NavLink to="/search" exact>
//             [ Search ]
//           </NavLink>
//           <NavLink to="/user" exact>
//             [ User ]
//           </NavLink>
//           <NavLink to="/browsefavorites" exact>
//             [ Browse Favorites ]
//           </NavLink>
//         </div>
//       );
//     } else {
//       return (
//         <NavLink to="/" exact>
//           [ Home ]
//         </NavLink>
//       );
//     }
//   };
//   render() {
//     return <div className="navbar">{this.checkLoggedIn()} </div>;
//   }
// }

// export default NavBar;
