import React, { Component } from "react";
import LoginModal from "../presentational/LoginModal";

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
    fetch("https://open-secrets-project-backend.herokuapp.com/users")
      .then(resp => resp.json())
      .then(users => {
        let foundUser = users.filter(
          user => user.email === this.state.loggedInEmail
        );
        if (foundUser.length !== 0) {
          this.props.loggedInEmail(this.state.loggedInEmail);
          this.props.loggedIn(true);
          this.props.loggedInId(foundUser[0].id);
          this.props.loggedInUsername(foundUser[0].name);
          this.props.onHandleHome(foundUser[0].favorites);
        } else {
          alert(
            "That email is not in our system. Please try again or create an account."
          );
        }
      });
  };

  render() {
    return (
      <div>
        <LoginModal
          loggedInEmail={this.state.loggedInEmail}
          loginEmailChange={e => this.handleLoginEmailChange(e)}
          submitLogin={e => this.handleSubmitLogIn(e)}
        ></LoginModal>
      </div>
    );
  }
}

export default LogIn;
