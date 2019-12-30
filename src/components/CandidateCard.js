import React, { Component } from "react";

class CandidateCard extends Component {
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
          <p>{this.props.contributors}</p>
        </div>
      );
    }
  }
}

export default CandidateCard;
