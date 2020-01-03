import React, { Component } from "react";
import LogIn from "./LogIn";
import CreateNewUser from "./CreateNewUser";
import "../App.css";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      loggedInEmail: "",
      loggedInUsername: "",
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

  handleLoggedInId = e => {
    this.props.loggedInId(e);
  };

  handleHome = e => {
    this.props.handleApp(e);
  };

  handleUsername = e => {
    this.props.username(e);
  };
  handleNewUserName = e => {
    this.setState({ newUserName: e, loggedInUsername: e });
    this.props.username(e);
  };
  handleNewUserEmail = e => {
    this.setState({ newUserEmail: e, loggedIn: true, loggedInEmail: e });
    this.props.loggedIn(true);
    this.props.loggedInEmail(e);
  };

  render() {
    return (
      <div className="homeBody">
        <h1>Open Secrets Browser</h1>
        <h4>
          This program is based on OpenSecrets.org, which tracks federal
          campaign contributions.
        </h4>
        <br></br>
        {this.props.persistLogIn ? (
          <h2>Welcome, {this.props.loggedInUsername}</h2>
        ) : (
          <div className="homeButtons">
            <LogIn
              loggedIn={this.handleLoggedIn}
              loggedInEmail={this.handleLoggedInEmail}
              loggedInId={this.handleLoggedInId}
              onHandleHome={this.handleHome}
              loggedInUsername={this.handleUsername}
            ></LogIn>
            <br></br>
            <CreateNewUser
              newUserName={this.handleNewUserName}
              newUserEmail={this.handleNewUserEmail}
              newUserId={this.handleLoggedInId}
            ></CreateNewUser>
            <br></br>
          </div>
        )}
      </div>
    );
  }
}

export default Home;
