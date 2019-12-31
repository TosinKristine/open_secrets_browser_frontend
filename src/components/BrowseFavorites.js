import React, { Component } from "react";

class Favorites extends Component {
  constructor() {
    super();
    this.state = {
      favorites: [],
      renderedFavorites: []
    };
  }

  searchLoggedInFavorites = () => {
    let loggedFavorites = this.props.userFavorites.map(favorite => {
      console.log(this.props.userFavorites);
      return favorite.cid;
    });
    console.log("logged favorites..." + loggedFavorites);
    return loggedFavorites;
  };

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

  groupFavorites = () => {
    let groupedFavorites = [];
    let renderedFavorites = [];
    this.state.favorites.map(favorite => {
      if (!groupedFavorites.includes(favorite.candidate.cand_name)) {
        groupedFavorites.push(favorite.candidate.cand_name);
        renderedFavorites.push({
          candidate_name: favorite.candidate.cand_name,
          cid: favorite.candidate.cid
        });
      }
    });

    // console.log(groupedFavorites);
    // console.log(renderedFavorites);
    this.setState({ renderedFavorites: renderedFavorites });
  };

  renderGroupedFavorites = () => {
    return this.state.renderedFavorites.map((favorite, index) => {
      return (
        <div key={index}>
          <h2>Candidate: {favorite.candidate_name}</h2>
          <h3>CID: {favorite.cid}</h3>
          {this.searchLoggedInFavorites()}
          <button
            onClick={() => {
              this.addToOwnFavorites(favorite.candidate_id);
            }}
          >
            Add to Your Favorites
          </button>

          <br></br>
        </div>
      );
    });
    // return this.state.groupedFavorites.map((favorite, index) => {
    //   return (
    //     <div key={index}>
    //       <h2>{favorite}</h2>
    //     </div>
    //   );
    // });
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
      .then(favorites => {
        this.setState({ favorites: favorites });
        // this.groupFavorites();
      });
  }

  organizeFavorites = () => {
    let newFavorites = [];
    let newFavoritesArray = [];
    this.state.favorites.map(favorite => {
      if (!newFavorites.includes(favorite.candidate.id)) {
        newFavorites.push(favorite.candidate.id);
        newFavoritesArray.push({
          candidate_id: favorite.candidate.id,
          candidate_name: favorite.candidate.cand_name,
          cid: favorite.candidate.cid,
          users_favorited: [favorite.user_id]
        });
      } else {
        newFavoritesArray.forEach(candidate => {
          if (candidate.candidate_id === favorite.candidate.id) {
            candidate.users_favorited.push(favorite.user_id);
          }
          console.log(candidate.candidate_id);
        });
      }
    });
    console.log(newFavorites);
    console.log(newFavoritesArray);
  };
  render() {
    return (
      <div>
        <h1>Favorites</h1>
        {/* {this.renderAllFavorites()} */}
        {/* {this.state.renderedFavorites.length !== 0
          ? this.renderGroupedFavorites()
          : null} */}
        {this.organizeFavorites()}
      </div>
    );
  }
}

export default Favorites;
