import React, { Component } from "react";
import "../App.css";
import EditUserInfoModal from "./EditUserInfoModal";
import DeleteUserModal from "../presentational/DeleteUserModal";

class UserInfo extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        userID: "",
        userName: "",
        userEmail: "",
        favorites: [],
        persistedFavorites: []
      },
      showEditForm: false
    };
  }

  handlePersistFavorites = e => {
    let uniqueFavorites = [];
    this.state.user.favorites.map(favorite => {
      if (!uniqueFavorites.includes(favorite)) {
        return uniqueFavorites.push(favorite);
      }
    });
    this.setState({
      persistedFavorites: uniqueFavorites
    });
  };

  componentDidMount() {
    this.setState({
      user: {
        userID: this.props.userID,
        userName: this.props.username,
        userEmail: this.props.userEmail,
        favorites: this.props.userFavorites
      }
    });
    this.handlePersistFavorites();
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
          </div>
        </div>
      );
    }
  };

  deleteUser = () => {
    fetch(
      "https://open-secrets-project-backend.herokuapp.com/users/" +
        this.state.user.userID,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          id: this.state.user.userID
        })
      }
    )
      .then(resp => resp.json())
      .then(json => this.props.deleted(true));
  };

  closeModal = () => {
    this.setState({
      showEditForm: false
    });
  };

  newUserName = name => {
    this.setState(
      {
        user: {
          ...this.state.user,
          userName: name
        }
      },
      this.props.newUsername(name)
    );
  };

  newUserEmail = email => {
    this.setState(
      {
        user: {
          ...this.state.user,
          userEmail: email
        }
      },
      this.props.newUserEmail(email)
    );
  };

  deleteFavorite = favorite => {
    fetch(
      "https://open-secrets-project-backend.herokuapp.com/favorites/" +
        favorite.id,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          id: favorite.id
        })
      }
    ).then(resp => resp.json());
  };

  changeFavoriteState = favorite => {
    this.setState(
      {
        user: {
          ...this.state.user,
          favorites: this.state.user.favorites.filter(each_favorite => {
            return each_favorite !== favorite;
          })
        }
      },
      this.props.deletedFavorite(favorite)
    );
  };

  eachFavorite = () => {
    return this.state.user.favorites.map((favorite, index) => {
      return (
        <li key={index}>
          {favorite.candidate.cand_name} (ID: {favorite.candidate.cid})
          <button
            onClick={() => {
              this.deleteFavorite(favorite);
              this.changeFavoriteState(favorite);
            }}
          >
            x
          </button>
        </li>
      );
    });
  };

  render() {
    return (
      <div>
        <h1>USER INFO</h1>
        <div className="userEditDeleteButtons">
          <div className="userEdit">
            <EditUserInfoModal
              userName={this.state.user.userName}
              userEmail={this.state.user.userEmail}
              userID={this.state.user.userID}
              newUserName={this.newUserName}
              newUserEmail={this.newUserEmail}
            ></EditUserInfoModal>
          </div>

          <div className="userDelete">
            <DeleteUserModal
              deleteConfirmation={this.deleteUser}
            ></DeleteUserModal>
          </div>
        </div>
        <div className="userInfo">
          <h3>Your name: {this.state.user.userName}</h3>
          <h3>Your email: {this.state.user.userEmail}</h3>
          <h3>Your favorite searches:</h3>
          <ul>{this.eachFavorite()}</ul>
        </div>
      </div>
    );
  }
}

export default UserInfo;
