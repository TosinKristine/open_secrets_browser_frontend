import React from "react";
import { Select } from "semantic-ui-react";

const stateOptions = [
  {
    text: "AL",
    key: "AL",
    value: "AL"
  },
  {
    text: "AK",
    key: "AK",
    value: "AK"
  },
  {
    text: "AZ",
    key: "AZ",
    value: "AZ"
  },
  {
    text: "AR",
    key: "AR",
    value: "AR"
  },
  {
    text: "CA",
    key: "CA",
    value: "CA"
  },
  {
    text: "CO",
    key: "CO",
    value: "CO"
  },
  {
    text: "CT",
    key: "CT",
    value: "CT"
  },
  {
    text: "DE",
    key: "DE",
    value: "DE"
  },
  {
    text: "FL",
    key: "FL",
    value: "FL"
  },
  {
    text: "GA",
    key: "GA",
    value: "GA"
  },
  {
    text: "HI",
    key: "HI",
    value: "HI"
  },
  {
    text: "ID",
    key: "ID",
    value: "ID"
  },
  {
    text: "IL",
    key: "IL",
    value: "IL"
  },
  {
    text: "IN",
    key: "IN",
    value: "IN"
  },
  {
    text: "IA",
    key: "IA",
    value: "IA"
  },
  {
    text: "KS",
    key: "KS",
    value: "KS"
  },
  {
    text: "KY",
    key: "KY",
    value: "KY"
  },
  {
    text: "LA",
    key: "LA",
    value: "LA"
  },
  {
    text: "ME",
    key: "ME",
    value: "ME"
  },
  {
    text: "MD",
    key: "MD",
    value: "MD"
  },
  {
    text: "MA",
    key: "MA",
    value: "MA"
  },
  {
    text: "MI",
    key: "MI",
    value: "MI"
  },
  {
    text: "MN",
    key: "MN",
    value: "MN"
  },
  {
    text: "MS",
    key: "MS",
    value: "MS"
  },
  {
    text: "MO",
    key: "MO",
    value: "MO"
  },
  {
    text: "MT",
    key: "MT",
    value: "MT"
  },
  {
    text: "NE",
    key: "NE",
    value: "NE"
  },
  {
    text: "NV",
    key: "NV",
    value: "NV"
  },
  {
    text: "NH",
    key: "NH",
    value: "NH"
  },
  {
    text: "NJ",
    key: "NJ",
    value: "NJ"
  },
  {
    text: "NM",
    key: "NM",
    value: "NM"
  },
  {
    text: "NY",
    key: "NY",
    value: "NY"
  },
  {
    text: "NC",
    key: "NC",
    value: "NC"
  },
  {
    text: "ND",
    key: "ND",
    value: "ND"
  },
  {
    text: "OH",
    key: "OH",
    value: "OH"
  },
  {
    text: "OK",
    key: "OK",
    value: "OK"
  },
  {
    text: "OR",
    key: "OR",
    value: "OR"
  },
  {
    text: "PA",
    key: "PA",
    value: "PA"
  },
  {
    text: "RI",
    key: "RI",
    value: "RI"
  },
  {
    text: "SC",
    key: "SC",
    value: "SC"
  },
  {
    text: "SD",
    key: "SD",
    value: "SD"
  },
  {
    text: "TN",
    key: "TN",
    value: "TN"
  },
  {
    text: "TX",
    key: "TX",
    value: "TX"
  },
  {
    text: "UT",
    key: "UT",
    value: "UT"
  },
  {
    text: "VT",
    key: "VT",
    value: "VT"
  },
  {
    text: "VA",
    key: "VA",
    value: "VA"
  },
  {
    text: "WA",
    key: "WA",
    value: "WA"
  },
  {
    text: "WV",
    key: "WV",
    value: "WV"
  },
  {
    text: "WI",
    key: "WI",
    value: "WI"
  },
  {
    text: "WY",
    key: "WY",
    value: "WY"
  }
];

const StatesDropdown = props => (
    <Select
      placeholder="Select a State"
      fluid
      selection
      options={stateOptions}
      onChange={e => {
        e.persist();
        props.selectedState(e.target.textContent);
      }}
    />
);

export default StatesDropdown;
