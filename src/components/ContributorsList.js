import React from "react";
import { List } from "semantic-ui-react";

const ContributorsList = props => {
  const eachContributor = () => {
    return props.contributors.map((contributor, index) => {
      return (
        <List.Item>
          <List.Content>
            <List.Header>{contributor.org_name}</List.Header>
            Total donated: ${contributor.total}
          </List.Content>
          <List.List>
            <List.Item>Amount from PACs: ${contributor.pacs}</List.Item>
            <List.Item>
              Amount from individuals: ${contributor.indivs}
            </List.Item>
          </List.List>
        </List.Item>
      );
    });
  };
  return (
    <div className="contributorsList">
      <h3>More information on the contributions</h3>
      <List celled>{eachContributor()}</List>
    </div>
  );
};

export default ContributorsList;
