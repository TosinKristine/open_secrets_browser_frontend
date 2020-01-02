import React from "react";
import { Button } from "semantic-ui-react";

const SaveToFavoritesButton = props => (
  <div className="saveToFavButton">
    <Button primary onClick={() => props.saveFavorite(true)}>
      Save this candidate to your favorites
    </Button>
  </div>
);

export default SaveToFavoritesButton;
