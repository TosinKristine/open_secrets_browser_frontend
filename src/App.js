import React from "react";
import "./App.css";
import Home from "./Home";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      candidate: {
        candidate_name: "",
        candidate_id: "",
        candidate_cycle: ""
      },
      contributors: []
    };
  }

  componentDidMount() {
    fetch(
      "https://www.opensecrets.org/api/?method=candContrib&cid=N00004724&apikey=a192665c31c48bfd2207ff83594a15d2&output=json"
    )
      .then(resp => resp.json())
      .then(data => {
        let candidate_name =
          data.response.contributors["@attributes"].cand_name;
        let candidate_id = data.response.contributors["@attributes"].cid;
        let candidate_cycle = data.response.contributors["@attributes"].cycle;
        this.setState({
          candidate: {
            candidate_name: candidate_name,
            candidate_id: candidate_id,
            candidate_cycle: candidate_cycle
          }
        });
        let contributors = data.response.contributors.contributor.map(
          contributor => {
            return (
              <div>
                <h4>Contributor name: {contributor["@attributes"].org_name}</h4>
                <h4>Total donated: ${contributor["@attributes"].total}</h4>
                <h4>Amount from PACs: ${contributor["@attributes"].pacs}</h4>
                <h4>
                  Amount from individuals: ${contributor["@attributes"].indivs}
                </h4>
                <br></br>
              </div>
            );
          }
        );
        this.setState({
          contributors: contributors
        });
      });
  }

  render() {
    return (
      <div>
        <Home />
        <h1>Candidate: {this.state.candidate.candidate_name}</h1>
        <h3>Candidate ID: {this.state.candidate.candidate_id}</h3>
        <h3>Candidate Cycle: {this.state.candidate.candidate_cycle}</h3>
        <br></br>
        <h2>Top Contributors:</h2>
        {this.state.contributors}
      </div>
    );
  }
}

export default App;
