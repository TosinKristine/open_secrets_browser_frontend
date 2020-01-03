import React, { Component } from "react";
import CandidateCard from "../presentational/CandidateCard";
import ContributionChart from "../presentational/ContributionChart";

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
        let organizedFavoritesByCandidateId = [];
        this.state.userFavorites.map(favorite => {
          organizedFavoritesByCandidateId.push(favorite.candidate.cid);
        });
        if (!organizedFavoritesByCandidateId.includes(json.candidate.cid)) {
          this.setState({
            userFavorites: this.state.userFavorites.concat(json)
          });
          this.props.addUserFavorites(this.state.userFavorites);
        }
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

  fetchCandidateContributors = favorite => {
    fetch("http://localhost:4000/candidates")
      .then(resp => resp.json())
      .then(json => {
        let result = json.filter(person => {
          return person.cand_name === favorite.candidate_name;
        });
        return (
          <ContributionChart
            candidate_name={favorite.candidate_name}
            contributors={result[0].contributors}
          ></ContributionChart>
        );
      });
  };

  renderCandidateContributors = () => {
    return true;
  };

  postedFavorites = () => {
    return this.state.postedFavorites.map((favorite, index) => {
      return (
        <div key={index}>
          <CandidateCard
            candidate_name={favorite.candidate_name}
            cid={favorite.cid}
            candidate_id={favorite.candidate_id}
            candidate_cycle={""}
            userFavoriteStatus={favorite.users_favorited.includes(
              this.props.userId
            )}
            favorited={this.addToOwnFavorites}
            contributionChart={true}
          ></CandidateCard>
          <br></br>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <h1>BROWSE FAVORITES</h1>
        <h4>
          These are the searches that have been 'favorited' by all users of Open
          Secrets Browser.
        </h4>
        <div className="favoritedCards">
          {this.state.postedFavorites.length !== 0
            ? this.postedFavorites()
            : null}
        </div>
      </div>
    );
  }
}

export default Favorites;
