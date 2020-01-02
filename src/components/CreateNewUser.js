import React, { Component } from "react";
import NewUserModal from "./NewUserModal";

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
    fetch("http://localhost:4000/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.newUserName,
        email: this.state.newUserEmail
      })
    })
      .then(resp => resp.json())
      .then(json => {
        this.props.newUserName(this.state.newUserName);
        this.props.newUserEmail(this.state.newUserEmail);
        this.props.newUserId(json.id);
      });
  };

  // renderNewUserForm = e => {
  //   if (this.state.newUserForm) {
  //     return (
  //       <form onSubmit={this.handleSubmitCreateUser}>
  //         <label>
  //           Your name:
  //           <input
  //             type="text"
  //             name="name"
  //             value={this.state.newUserName}
  //             onChange={this.handleCreateUserName}
  //           ></input>
  //         </label>
  //         <label>
  //           Your email:
  //           <input
  //             type="text"
  //             name="email"
  //             value={this.state.newUserEmail}
  //             onChange={this.handleCreateUserEmail}
  //           ></input>
  //         </label>
  //         <input type="submit" value="Create Account"></input>
  //       </form>
  //     );
  //   }
  // };

  render() {
    return (
      <div>
        {/* <h2 onClick={this.checkForNewUser}>Create new user here...</h2>
        {this.renderNewUserForm()} */}
        <NewUserModal
          newUsername={this.state.newUserName}
          usernameChange={e => this.handleCreateUserName(e)}
          newUserEmail={this.state.newUserEmail}
          emailChange={e => this.handleCreateUserEmail(e)}
          submitLogin={e => this.handleSubmitCreateUser(e)}
        ></NewUserModal>
      </div>
    );
  }
}

export default CreateNewUser;
