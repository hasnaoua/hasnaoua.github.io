import React, { Component } from "react";
import cloudInfrastructure from "../../assets/images/cloud_infrastructure.svg";

export default class CloudInfraImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <img
        src={cloudInfrastructure}
        alt="Cloud Infrastructure"
        width="864.81"
        height="658.45"
      />
    );
  }
}
