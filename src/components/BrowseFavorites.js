import React, { Component } from "react";

class Favorites extends Component {
  constructor() {
    super();
    this.state = {
      favorites: [],
      postedFavorites: [],
      userFavorites: []
    };
  }

  addToOwnFavorites = candidateId => {
    fetch("http://localhost:4000/favorites", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: this.props.userId,
        candidate_id: candidateId
      })
    })
      .then(resp => resp.json())
      .then(json => {
        console.log(json);
        this.setState(
          { userFavorites: this.state.userFavorites.concat(json) },
          this.props.addUserFavorites(this.state.userFavorites)
        );
      });
  };

  componentDidMount() {
    fetch("http://localhost:4000/favorites")
      .then(resp => resp.json())
      .then(favorites => {
        this.setState({
          favorites: favorites,
          userFavorites: this.props.userFavorites
        });
        this.organizeFavorites();
      });
  }

  organizeFavorites = () => {
    let newFavorites = [];
    let organizedFavorites = [];
    this.state.favorites.map(favorite => {
      if (!newFavorites.includes(favorite.candidate.id)) {
        newFavorites.push(favorite.candidate.id);
        organizedFavorites.push({
          candidate_id: favorite.candidate.id,
          candidate_name: favorite.candidate.cand_name,
          cid: favorite.candidate.cid,
          users_favorited: [favorite.user_id]
        });
      } else {
        organizedFavorites.forEach(candidate => {
          if (candidate.candidate_id === favorite.candidate.id) {
            candidate.users_favorited.push(favorite.user_id);
          }
        });
      }
    });
    this.setState({ postedFavorites: organizedFavorites });
  };

  postedFavorites = () => {
    return this.state.postedFavorites.map((favorite, index) => {
      return (
        <div key={index}>
          <h2>Candidate: {favorite.candidate_name}</h2>
          <h3>CID: {favorite.cid}</h3>
          {!favorite.users_favorited.includes(this.props.userId) ? (
            <button
              onClick={() => {
                this.addToOwnFavorites(favorite.candidate_id);
              }}
            >
              Add to Your Favorites
            </button>
          ) : null}

          <br></br>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <h1>Favorites</h1>
        {this.state.postedFavorites.length !== 0
          ? this.postedFavorites()
          : null}
      </div>
    );
  }
}

export default Favorites;
