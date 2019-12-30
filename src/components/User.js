import React, { Component } from "react";
import "../App.css";
import Modal from "./Modal";

class UserInfo extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        userID: "",
        userName: "",
        userEmail: "",
        favorites: []
      },
      showEditForm: false
    };
  }

  componentDidMount() {
    fetch("http://localhost:4000/users")
      .then(resp => resp.json())
      .then(users => {
        let foundUser = users.filter(
          user => user.email === this.props.userEmail
        );
        if (foundUser.length !== 0) {
          this.setState({
            user: {
              ...this.state.user,
              userID: foundUser[0].id,
              userName: foundUser[0].name,
              userEmail: foundUser[0].email,
              favorites: foundUser[0].favorites
            }
          });
        } else {
          this.setState({
            user: {
              ...this.state.user,
              userID: 0,
              userName: "test user",
              userEmail: "testuser@email.com",
              favorites: []
            }
          });
        }
      });
  }

  editUserInfo = () => {
    this.setState({
      showEditForm: true
    });
  };

  checkToEdit = () => {
    if (this.state.showEditForm) {
      return (
        <div className="modal">
          <div className="modalContent">
            <span className="close" onClick={this.closeModal}>
              X
            </span>
            <p>ta daa</p>
          </div>
        </div>
      );
    }
  };

  deleteUser = () => {
    console.log("lets delete!");
  };

  closeModal = () => {
    this.setState({
      showEditForm: false
    });
  };

  newUserName = name => {
    this.setState({
      user: {
        ...this.state.user,
        userName: name
      }
    });
  };

  newUserEmail = email => {
    this.setState({
      user: {
        ...this.state.user,
        userEmail: email
      }
    });
  };

  render() {
    return (
      <div>
        <div className="userInfo">
          <h1>User Info</h1>
          <h2>Your Name: {this.state.user.userName}</h2>
          <h3>Your email: {this.state.user.userEmail}</h3>
          <h3>Your favorite searches: </h3>
          <ul>
            {this.state.user.favorites.map((favorite, index) => (
              <li key={index}>
                {console.log(favorite)}
                {favorite.candidate.cand_name} (ID: {favorite.candidate.cid})
              </li>
            ))}
          </ul>
        </div>

        <button onClick={this.editUserInfo}>Edit Your Info</button>
        <Modal
          show={this.state.showEditForm}
          closeModal={this.closeModal}
          userName={this.state.user.userName}
          userEmail={this.state.user.userEmail}
          userID={this.state.user.userID}
          newUserName={this.newUserName}
          newUserEmail={this.newUserEmail}
        />
        <button onClick={this.deleteUser}>Delete Your Account</button>
      </div>
    );
  }
}

export default UserInfo;
