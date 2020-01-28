import React from "react";
import ContributionChart from "./ContributionChart";
import ContributorsList from "./ContributorsList";

const Contributors = props => {
  const saveContributors = contributor => {
    fetch("https://open-secrets-project-backend.herokuapp.com/contributors", {
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
        candidate_id: props.candidate_id
      })
    }).then(resp => resp.json());
  };
  const renderResults = () => {
    return props.contributors.map((contributor, index) => {
      return <div key={index}>{saveContributors(contributor)}</div>;
    });
  };
  return (
    <>
      {renderResults()}
      <ContributionChart
        contributors={props.contributors}
        candidate_name={props.candidate_name}
      />
      <ContributorsList contributors={props.contributors}></ContributorsList>
    </>
  );
};

export default Contributors;
