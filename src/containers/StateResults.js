import React, { Component } from "react";
import { Card } from "semantic-ui-react";

const StateResults = props => {
  const renderResults = () => {
    return props.search_results.map(person => {
      return (
        <Card onClick={() => props.selectedPerson(person)}>
          <Card.Content>
            <Card.Header>{person.legislator_name}</Card.Header>
            <Card.Meta>{person.cid}</Card.Meta>
          </Card.Content>
        </Card>
      );
    });
  };

  return <>{renderResults()}</>;
};

export default StateResults;
