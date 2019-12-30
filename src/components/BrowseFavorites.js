import React, { Component } from "react";

class Favorites extends Component {
  constructor() {
    super();
    this.state = {
      favorites: []
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
      .then(json => console.log(json));
  };

  renderAllFavorites = () => {
    return this.state.favorites.map((favorite, index) => {
      return (
        <div key={index}>
          <h2>{favorite.candidate.cand_name}</h2>
          <h3>{favorite.candidate.cid}</h3>
          <h3>Added by user: {favorite.user_id}</h3>
          {favorite.user_id !== this.props.userId ? (
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
  componentDidMount() {
    fetch("http://localhost:4000/favorites")
      .then(resp => resp.json())
      .then(favorites => this.setState({ favorites: favorites }));
  }
  render() {
    return (
      <div>
        <h1>Favorites</h1>
        {this.renderAllFavorites()}
      </div>
    );
  }
}

export default Favorites;
