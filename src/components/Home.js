import React, { Component } from "react";
import LogIn from "./LogIn";
import CreateNewUser from "./CreateNewUser";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      loggedInEmail: "",
      newUserName: "",
      newUserEmail: ""
    };
  }

  handleLoggedIn = e => {
    this.setState({ loggedIn: e });
  };

  handleLoggedInEmail = e => {
    this.setState({ loggedInEmail: e });
    this.props.loggedIn(true);
    this.props.loggedInEmail(e);
  };

  handleNewUserName = e => {
    this.setState({ newUserName: e });
  };
  handleNewUserEmail = e => {
    this.setState({ newUserEmail: e, loggedIn: true, loggedInEmail: e });
    this.props.loggedIn(true);
    this.props.loggedInEmail(e);
  };

  render() {
    return (
      <div>
        <h1>Open Secrets Browser</h1>
        <LogIn
          loggedIn={this.handleLoggedIn}
          loggedInEmail={this.handleLoggedInEmail}
        ></LogIn>
        <CreateNewUser
          newUserName={this.handleNewUserName}
          newUserEmail={this.handleNewUserEmail}
        ></CreateNewUser>
      </div>
    );
  }
}

export default Home;
