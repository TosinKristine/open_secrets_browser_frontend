import React from "react";
import { Card } from "semantic-ui-react";
import Contributors from "../components/Contributors";
import SaveToFavoritesButton from "../components/SaveToFavoritesButton";
import ContributionChartModal from "../components/ContributionChartModal";

const CandidateCard = props => {
  if (props.candidate_name !== "") {
    return (
      <>
        {props.contributors ? (
          <Contributors
            contributors={props.contributors}
            candidate_id={props.candidate_id}
            candidate_name={props.candidate_name}
          />
        ) : null}
        {props.searchPage ? (
          <SaveToFavoritesButton
            saveFavorite={() => props.favorited(props.candidate_id)}
          ></SaveToFavoritesButton>
        ) : (
          <div className="candidateCard">
            <Card>
              <Card.Content>
                <Card.Header>{props.candidate_name}</Card.Header>
                <Card.Meta>{props.cid} </Card.Meta>
                <Card.Meta>{props.candidate_cycle} </Card.Meta>
              </Card.Content>
              <br></br>
              {props.userFavoriteStatus ? null : (
                <button onClick={() => props.favorited(props.candidate_id)}>
                  Save this candidate to your favorites
                </button>
              )}
              {props.contributionChart ? (
                <ContributionChartModal
                  cid={props.cid}
                  candidate_name={props.candidate_name}
                ></ContributionChartModal>
              ) : null}
            </Card>
          </div>
        )}
      </>
    );
  } else {
    return null;
  }
};

export default CandidateCard;
