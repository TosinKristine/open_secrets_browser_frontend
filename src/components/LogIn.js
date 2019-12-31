import React, { Component } from "react";

class LogIn extends Component {
  constructor() {
    super();
    this.state = {
      loggedInForm: false,
      loggedInEmail: ""
    };
  }

  renderLogIn = () => {
    this.setState({
      loggedInForm: true
    });
  };

  handleLoginEmailChange = e => {
    this.setState({ loggedInEmail: e.target.value });
  };

  handleSubmitLogIn = e => {
    e.preventDefault();
    fetch("http://localhost:4000/users")
      .then(resp => resp.json())
      .then(users => {
        let foundUser = users.filter(
          user => user.email === this.state.loggedInEmail
        );
        if (foundUser.length !== 0) {
          this.props.loggedInEmail(this.state.loggedInEmail);
          this.props.loggedIn(true);
          this.props.loggedInId(foundUser[0].id);
          this.props.onHandleHome(foundUser[0].favorites);
        } else {
          alert(
            "That email is not in our system. Please try again or create an account."
          );
        }
      });
  };

  checkLoggedIn = () => {
    if (this.state.loggedInForm) {
      return (
        <form onSubmit={this.handleSubmitLogIn}>
          <h2>Log in to an existing account:</h2>
          <label>
            Your email:
            <input
              type="text"
              name="email"
              value={this.state.loggedInEmail}
              onChange={this.handleLoginEmailChange}
            ></input>
          </label>
          <input type="submit" value="Log In"></input>
        </form>
      );
    } else {
      return (
        <div>
          <h2 onClick={this.renderLogIn}>Log In Over Here....</h2>
        </div>
      );
    }
  };

  render() {
    return <div>{this.checkLoggedIn()}</div>;
  }
}

export default LogIn;
