import React, { Component } from "react";

class CreateNewUser extends Component {
  constructor() {
    super();
    this.state = {
      createNewAccount: false,
      newUserName: "",
      newUserEmail: ""
    };
  }

  checkForNewUser = e => {
    if (this.state.createNewAccount) {
      console.log("someone wants in");
    }
  };
  render() {
    return (
      <div>
        <h2>hmm...</h2>
        {this.checkForNewUser()}
      </div>
    );
  }
}

export default CreateNewUser;
