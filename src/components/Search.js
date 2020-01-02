import React, { Component } from "react";
import CandidateCard from "../containers/CandidateCard";
import StateResults from "../containers/StateResults";
import StatesDropdown from "./StatesDropdown";
import LoaderExampleLoader from "./Loader";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      candidate_search: "",
      search_by_state: "",
      state_search_results: [],
      candidate: {
        candidate_name: "",
        candidate_id: "",
        candidate_cycle: "",
        id: ""
      },
      contributors: [],
      isLoadingState: false,
      isLoadingCandidate: false
    };
  }

  handleCandidateChange = e => {
    this.setState({ candidate_search: e.target.value });
  };

  handleLettersChange = e => {
    this.setState({ search_by_state: e.target.value.toUpperCase() });
  };

  handleCandidateSubmit = e => {
    e.preventDefault();
    this.setState({ isLoadingCandidate: true });
    fetch(
      "https://www.opensecrets.org/api/?method=candContrib&cid=" +
        this.state.candidate_search +
        "&apikey=a192665c31c48bfd2207ff83594a15d2&output=json"
    )
      .then(resp => resp.json())
      .then(data => {
        let candidate_name =
          data.response.contributors["@attributes"].cand_name;
        let candidate_id = data.response.contributors["@attributes"].cid;
        let candidate_cycle = data.response.contributors["@attributes"].cycle;
        this.setState({
          isLoadingCandidate: false,
          candidate: {
            candidate_name: candidate_name,
            candidate_id: candidate_id,
            candidate_cycle: candidate_cycle
          }
        });

        let contributors = data.response.contributors.contributor.map(
          contributor => {
            return {
              org_name: contributor["@attributes"].org_name,
              total: contributor["@attributes"].total,
              pacs: contributor["@attributes"].pacs,
              indivs: contributor["@attributes"].indivs
            };
          }
        );
        this.setState(
          {
            contributors: contributors
          },
          () => {
            fetch("http://localhost:4000/candidates", {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                ...this.state.candidate,
                cand_name: this.state.candidate.candidate_name,
                cid: this.state.candidate.candidate_id,
                cycle: this.state.candidate.candidate_cycle
              })
            })
              .then(resp => resp.json())
              .then(json => {
                this.setState({
                  candidate: {
                    ...this.state.candidate,
                    id: json.id
                  }
                });
              });
          }
        );
      });
  };

  handleLettersSubmit = e => {
    e.preventDefault();
    this.setState({ isLoadingState: true });
    fetch(
      "http://www.opensecrets.org/api/?method=getLegislators&id=" +
        this.state.search_by_state +
        "&apikey=a192665c31c48bfd2207ff83594a15d2&output=json"
    )
      .then(resp => resp.json())
      .then(data => {
        let search_results = data.response.legislator.map(legislator => {
          return {
            legislator_name: legislator["@attributes"].firstlast,
            cid: legislator["@attributes"].cid
          };
        });
        this.setState({
          isLoadingState: false,
          state_search_results: search_results
        });
      });
  };

  favorited = candidateId => {
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
        this.props.addFavorite(json);
      });
  };

  handleSelectedState = e => {
    this.setState({ search_by_state: e });
  };

  handleSelectedPerson = e => {
    console.log(e);
    this.setState({ candidate_search: e.cid });
  };

  render() {
    return (
      <div className="searchBody">
        <h1>SEARCH</h1>
        <h4>
          On this page you can look up legislators by state, and then use their
          ID number to find information about their financial contributors.
        </h4>
        <h2>Search for legislators by state</h2>
        <h4>
          Then, click on the legislator you're interested and click "Find
          Contribution Information"
        </h4>
        <form onSubmit={this.handleLettersSubmit} className="searchForm">
          <StatesDropdown
            selectedState={this.handleSelectedState}
            className="searchButtons"
          />
          <input
            type="submit"
            value="Search for Legislators"
            className="searchButtons"
          ></input>
        </form>

        <div className="allStateResultsCards">
          <StateResults
            search_results={this.state.state_search_results}
            selectedPerson={this.handleSelectedPerson}
          />
        </div>
        {this.state.isLoadingState ? <LoaderExampleLoader /> : null}

        <hr></hr>
        <h2>Find financial information about a candidate</h2>
        <form onSubmit={this.handleCandidateSubmit}>
          <div className="candidateSearchForm">
            {/* <label className="candidateID">
              Candidate ID: */}
            <input
              type="text"
              value={this.state.candidate_search}
              onChange={this.handleCandidateChange}
              placeholder="Candidate ID"
              className="searchButtons"
            ></input>
            {/* </label> */}
            <input
              type="submit"
              value="Find Contribution Information"
              className="searchButtons"
            ></input>
          </div>
        </form>

        {this.state.isLoadingCandidate ? <LoaderExampleLoader /> : null}

        <CandidateCard
          candidate_name={this.state.candidate.candidate_name}
          candidate_id={this.state.candidate.id}
          candidate_cycle={this.state.candidate.candidate_cycle}
          contributors={this.state.contributors}
          favorited={this.favorited}
          // id={this.state.candidate.id}
        />
      </div>
    );
  }
}

export default Search;
