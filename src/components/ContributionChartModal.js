import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";
import ContributionChart from "./ContributionChart";

class ContributionChartModal extends Component {
  constructor() {
    super();
    this.state = {
      contributors: []
    };
  }
  componentDidMount() {
    fetch("http://localhost:4000/candidates")
      .then(resp => resp.json())
      .then(json => {
        let result = json.filter(person => {
          return person.cid === this.props.cid;
        });
        this.setState({
          contributors: result[0].contributors.splice(0, 10)
        });
      });
  }

  render() {
    return (
      <Modal trigger={<Button>See Their Contributors</Button>}>
        <Modal.Header></Modal.Header>
        <Modal.Content>
          <Modal.Description></Modal.Description>
          <ContributionChart
            contributors={this.state.contributors}
            candidate_name={this.props.candidate_name}
          ></ContributionChart>
        </Modal.Content>
      </Modal>
    );
  }
}

export default ContributionChartModal;
