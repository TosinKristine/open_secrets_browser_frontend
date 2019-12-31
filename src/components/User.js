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
        // favorites: this.props.userFavorites
        // favorites: []
      },
      showEditForm: false
    };
  }

  componentDidMount() {
    this.setState({
      user: {
        userID: this.props.userID,
        userName: this.props.username,
        userEmail: this.props.userEmail,
        favorites: this.props.userFavorites
      }
    });

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
          </div>
        </div>
      );
    }
  };

  deleteUser = () => {
    fetch("http://localhost:4000/users/" + this.state.user.userID, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: this.state.user.userID
      })
    })
      .then(resp => resp.json())
      .then(json => this.props.deleted(true));
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

  deleteFavorite = favorite => {
    console.log(favorite);
    fetch("http://localhost:4000/favorites/" + favorite.id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: favorite.id
      })
    })
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          user: {
            ...this.state.user,
            favorites: this.state.user.favorites.filter(each_favorite => {
              return each_favorite !== favorite;
            })
          }
        });
      });
  };

  eachFavorite = () => {
    return this.state.user.favorites.map((favorite, index) => {
      return (
        <li key={index}>
          {favorite.candidate.cand_name} (ID: {favorite.candidate.cid})
          <button onClick={() => console.log("delete this", favorite)}>
            x
          </button>
        </li>
      );
    });
  };

  render() {
    return (
      <div>
        <div className="userInfo">
          <h1>User info...</h1>
          <h2>Your name: {this.state.user.userName}</h2>
          <h3>Your email:{this.state.user.userEmail}</h3>
          <h3>Your favorite searches:</h3>
          <ul>{this.eachFavorite()}</ul>
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
