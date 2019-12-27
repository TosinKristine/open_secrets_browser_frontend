import React, { Component } from "react";

class UserInfo extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      userEmail: "",
      favorites: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:4000/users")
      .then(resp => resp.json())
      .then(users => {
        let foundUser = users.filter(
          user => user.email === this.props.userEmail
        );
        if (foundUser.length !== 0) {
          this.setState({
            userName: foundUser[0].name,
            userEmail: foundUser[0].email,
            favorites: foundUser[0].favorites
          });
        } else {
          this.setState({
            userName: "test user",
            userEmail: "testuser@email.com",
            favorites: []
          });
        }
      });
  }

  render() {
    return (
      <div>
        <h1>User Info</h1>
        <h2>Your Name: {this.state.userName}</h2>
        <h3>Your email: {this.state.userEmail}</h3>
        <h3>Your favorite searches: </h3>
        <ul>
          {this.state.favorites.map((favorite, index) => (
            <li key={index}>
              {favorite.candidate.cand_name} (ID: {favorite.candidate.cid})
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UserInfo;
