import React, { Component } from "react";

class CandidateCard extends Component {
  contributors = () => {
    return this.props.contributors.map(contributor => {
      return (
        <div>
          <h4>Contributor name: {contributor.org_name}</h4>
          <h4>Total donated: ${contributor.total}</h4>
          <h4>Amount from PACs: ${contributor.pacs}</h4>
          <h4>Amount from individuals: ${contributor.indivs}</h4>
          <br></br>
        </div>
      );
    });
  };

  render() {
    if (this.props.candidate_name === "") {
      return null;
    } else {
      return (
        <div>
          <h1>Candidate: {this.props.candidate_name}</h1>
          <h3>Candidate ID: {this.props.candidate_id}</h3>
          <h3>Candidate Cycle: {this.props.candidate_cycle}</h3>
          <br></br>
          <h2>Top Contributors:</h2>
          {this.contributors()}
          <button
            onClick={() => this.props.favorited(this.props.candidate_name)}
          >
            Save Candidate to Your Favorites
          </button>
        </div>
      );
    }
  }
}

export default CandidateCard;
