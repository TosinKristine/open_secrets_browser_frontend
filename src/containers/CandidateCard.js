import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import Contributors from "../components/Contributors";

const CandidateCard = props => {
  if (props.candidate_name !== "") {
    return (
      <>
        <div className="candidateCard">
          <Card>
            <Card.Content>
              <Card.Header>{props.candidate_name}</Card.Header>
              <Card.Meta>{props.cid} </Card.Meta>
              <Card.Meta>{props.candidate_cycle} </Card.Meta>
            </Card.Content>
            <br></br>
            {/* {props.seeContributors ? (
            <button onClick={() => props.seeContributors(true)}>
              Click to see Contributors
            </button>
          ) : null} */}
            {props.userFavoriteStatus ? null : (
              <button
                onClick={() => props.favorited(props.candidate_id)}
              >
                Save this candidate to your favorites
              </button>
            )}
          </Card>
        </div>
        {props.contributors ? (
          <Contributors
            contributors={props.contributors}
            candidate_id={props.candidate_id}
            candidate_name={props.candidate_name}
          />
        ) : null}
      </>
    );
  } else {
    return null;
  }
};

// class CandidateCard extends Component {
//   contributors = () => {
//     return this.props.contributors.map((contributor, index) => {
//       this.saveContributors(contributor);
//       return (
//         <div key={index}>
//           <h4>Contributor name: {contributor.org_name}</h4>
//           <h4>Total donated: ${contributor.total}</h4>
//           <h4>Amount from PACs: ${contributor.pacs}</h4>
//           <h4>Amount from individuals: ${contributor.indivs}</h4>
//           <br></br>
//         </div>
//       );
//     });
//   };

//   saveContributors = contributor => {
//     fetch("http://localhost:4000/contributors", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         org_name: contributor.org_name,
//         total: contributor.total,
//         pacs: contributor.pacs,
//         indivs: contributor.indivs,
//         candidate_id: this.props.id
//       })
//     });
//   };

//   render() {
//     if (this.props.candidate_name === "") {
//       return null;
//     } else {
//       return (
//         <div>
//           <h1>Candidate: {this.props.candidate_name}</h1>
//           <h3>Candidate ID: {this.props.candidate_id}</h3>
//           <h3>Candidate Cycle: {this.props.candidate_cycle}</h3>
//           <br></br>
//           <h2>Top Contributors:</h2>
//           {this.contributors()}
//           <button onClick={() => this.props.favorited(this.props.id)}>
//             Save Candidate to Your Favorites
//           </button>
//         </div>
//       );
//     }
//   }
// }

export default CandidateCard;
