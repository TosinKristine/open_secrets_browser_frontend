import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";

class EditUserInfoModal extends Component {
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
    fetch(
      "https://open-secrets-project-backend.herokuapp.com/users/" +
        this.props.userID,
      {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: this.state.editedName,
          email: this.state.editedEmail
        })
      }
    )
      .then(response => response.json())
      .then(json => {
        this.props.newUserName(this.state.editedName);
        this.props.newUserEmail(this.state.editedEmail);
      });
  };

  render() {
    return (
      <div>
        <Modal trigger={<Button>Edit Name/Email</Button>}>
          <Modal.Header>Edit Your Name and Email</Modal.Header>
          <Modal.Content>
            <Modal.Description>
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
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

export default EditUserInfoModal;
