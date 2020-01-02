import React from "react";
// import { Card } from "semantic-ui-react";
import ContributionChart from "./ContributionChart";
import ContributorsList from "./ContributorsList";

const Contributors = props => {
  const saveContributors = contributor => {
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
        candidate_id: props.candidate_id
      })
    }).then(resp => resp.json());
  };
  const renderResults = () => {
    return props.contributors.map((contributor, index) => {
      return (
        <div key={index}>
          {saveContributors(contributor)}

          {/* <Card>
            <Card.Content>
              <Card.Header>
                Contributor name: {contributor.org_name}
              </Card.Header>
              <Card.Description>
                Total donated: ${contributor.total}{" "}
              </Card.Description>
              <Card.Meta>Amount from PACS: ${contributor.pacs} </Card.Meta>
              <Card.Meta>
                Amount from individuals: ${contributor.indivs}{" "}
              </Card.Meta>
            </Card.Content>
          </Card> */}
        </div>
      );
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
