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
      <List celled>
        {eachContributor()}
        {/* <List.Item>
        <List.Content>
          <List.Header>Snickerdoodle</List.Header>
          An excellent companion
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          <List.Header>Poodle</List.Header>A poodle, it's pretty basic
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          <List.Header>Paulo</List.Header>
          He's also a dog
        </List.Content>
      </List.Item> */}
      </List>
    </div>
  );
};

export default ContributorsList;
