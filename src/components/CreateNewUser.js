import React, { Component } from "react";

class CreateNewUser extends Component {
  constructor() {
    super();
    this.state = {
      newUserForm: false,
      newUserName: "",
      newUserEmail: ""
    };
  }

  checkForNewUser = e => {
    this.setState({ newUserForm: true });
  };

  handleCreateUserName = e => {
    this.setState({ newUserName: e.target.value });
  };
  handleCreateUserEmail = e => {
    this.setState({ newUserEmail: e.target.value });
  };

  handleSubmitCreateUser = e => {
    e.preventDefault();
    this.props.newUserName(this.state.newUserName);
    this.props.newUserEmail(this.state.newUserEmail);
  };

  renderNewUserForm = e => {
    if (this.state.newUserForm) {
      return (
        <form onSubmit={this.handleSubmitCreateUser}>
          <label>
            Your name:
            <input
              type="text"
              name="name"
              value={this.state.newUserName}
              onChange={this.handleCreateUserName}
            ></input>
          </label>
          <label>
            Your email:
            <input
              type="text"
              name="email"
              value={this.state.newUserEmail}
              onChange={this.handleCreateUserEmail}
            ></input>
          </label>
          <input type="submit" value="Create Account"></input>
        </form>
      );
    }
  };

  render() {
    return (
      <div>
        <h2 onClick={this.checkForNewUser}>Create new user here...</h2>
        {this.renderNewUserForm()}
      </div>
    );
  }
}

export default CreateNewUser;
