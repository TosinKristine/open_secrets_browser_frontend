import React, { Component } from "react";
import { Link } from "react-router-dom";
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
          as={Link}
          active={activeItem === "home"}
          onClick={this.handleItemClick}
          name="home"
          to="/"
        >
          Home
        </Menu.Item>
        <Menu.Item
          as={Link}
          active={activeItem === "search"}
          onClick={this.handleItemClick}
          name="search"
          to="/search"
        >
          Search
        </Menu.Item>
        <Menu.Item
          as={Link}
          active={activeItem === "browsefavorites"}
          onClick={this.handleItemClick}
          name="browsefavorites"
          to="/browsefavorites"
        >
          Browse Favorites
        </Menu.Item>
        <Menu.Item
          as={Link}
          active={activeItem === "user"}
          onClick={this.handleItemClick}
          name="user"
          to="/user"
        >
          User Info
        </Menu.Item>
      </Menu>
    );
  }
}
