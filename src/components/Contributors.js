import React, { Component } from "react";
import { Card } from "semantic-ui-react";

const Contributors = props => {
  const renderResults = () => {
    return props.contributors.map(contributor => {
      return (
        <Card>
          <Card.Content>
            <Card.Header>Contributor name: {contributor.org_name}</Card.Header>
            <Card.Description>
              Total donated: ${contributor.total}{" "}
            </Card.Description>
            <Card.Meta>Amount from PACS: ${contributor.pacs} </Card.Meta>
            <Card.Meta>
              Amount from individuals: ${contributor.indivs}{" "}
            </Card.Meta>
          </Card.Content>
        </Card>
      );
    });
  };
  return <>{renderResults()}</>;
};

export default Contributors;
