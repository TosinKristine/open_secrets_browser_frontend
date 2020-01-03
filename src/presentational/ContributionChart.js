import React, { Component } from "react";
import CanvasJSReact from "../canvasjs.react";
// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class ContributionChart extends Component {
  eachContributor = () => {
    return this.props.contributors.map(contributor => {
      return { label: contributor.org_name, y: parseInt(contributor.total) };
    });
  };
  render() {
    const options = {
      title: {
        text: `${this.props.candidate_name}'s Top Contributors`
      },
      data: [
        {
          type: "column",
          dataPoints: this.eachContributor()
        }
      ]
    };

    return (
      <div className="contributionChart">
        <CanvasJSChart
          options={options}
          // onRef = {ref => this.chart = ref}
        />
      </div>
    );
  }
}

export default ContributionChart;
