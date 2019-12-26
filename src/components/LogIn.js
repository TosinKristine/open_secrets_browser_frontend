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
    this.props.loggedInEmail(this.state.loggedInEmail);
    this.props.loggedIn(true);
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
