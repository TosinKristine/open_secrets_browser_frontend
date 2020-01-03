import React from "react";
import { Card } from "semantic-ui-react";

const StateResults = props => {
  const renderResults = () => {
    return props.search_results.map((person, index) => {
      return (
        <div key={index}>
          <Card onClick={() => props.selectedPerson(person)}>
            <Card.Content>
              <Card.Header>{person.legislator_name}</Card.Header>
              <Card.Meta>Candidate ID: {person.cid}</Card.Meta>
            </Card.Content>
          </Card>
        </div>
      );
    });
  };

  return <>{renderResults()}</>;
};

export default StateResults;
