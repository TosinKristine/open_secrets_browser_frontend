import React, { Component } from "react";

class CandidateCard extends Component {
  contributors = () => {
    return this.props.contributors.map(contributor => {
      this.saveContributors(contributor);
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

  saveContributors = contributor => {
    console.log("hmm...");
    console.log(contributor);
    fetch("http://localhost:4000/contributors", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        org_name: contributor.org_name,
        total: contributor.total,
        pacs: contributor.pacs,
        indivs: contributor.indivs,
        candidate_id: this.props.id
      })
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
