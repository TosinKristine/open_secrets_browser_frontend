import React, { Component } from "react";

class Modal extends Component {
  constructor() {
    super();
    this.state = {
      editedName: "",
      editedEmail: ""
    };
  }

  handleNameChange = e => {
    if (e.target.value !== "") {
      this.setState({ editedName: e.target.value });
    } else {
      this.setState({ editedName: this.props.userName });
    }
  };

  handleEmailChange = e => {
    if (e.target.value !== "") {
      this.setState({ editedEmail: e.target.value });
    } else {
      this.setState({ editedEmail: this.props.userEmail });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    fetch("http://localhost:4000/users/" + this.props.userID, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.editedName,
        email: this.state.editedEmail
      })
    })
      .then(response => response.json())
      .then(json => {
        //   console.log(this.state.editedName)
        this.props.newUserName(this.state.editedName);
        this.props.newUserEmail(this.state.editedEmail);
      });
  };

  render() {
    if (this.props.show === false) {
      return null;
    } else {
      return (
        <div>
          <h2>Edit Your Information</h2>
          <form onSubmit={this.handleSubmit}>
            <label>
              Your name:
              <input
                type="text"
                value={this.state.editedName}
                onChange={this.handleNameChange}
              ></input>
            </label>
            <label>
              Your email:
              <input
                type="text"
                value={this.state.editedEmail}
                onChange={this.handleEmailChange}
              ></input>
            </label>
            <input type="submit" value="Save"></input>
          </form>
          <button onClick={() => this.props.closeModal()}>
            Close Edit Form
          </button>
        </div>
      );
    }
  }
}

export default Modal;
