import React, { Component } from "react";

class StateResults extends Component {
  render() {
    if (this.props.search_results.length === 0) {
      return null;
    } else {
      return (
        <div>
          <h2>Search results by state:</h2>
          {this.props.search_results}
        </div>
      );
    }
  }
}

export default StateResults;
