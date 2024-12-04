import React, { Component } from "react";
import "./Educations.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import { degrees } from "../../portfolio"; // Ensure 'degrees' is exported from 'portfolio.js'
import { Fade } from "react-reveal";

class Educations extends Component {
  render() {
    const { theme } = this.props; // Destructure 'theme' for cleaner code
    return (
      <div className="main" id="educations">
        <div className="educations-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="educations-header" style={{ color: theme.text }}>
              Degrees Received
            </h1>
          </Fade>
        </div>
        <div className="educations-body-div">
          {degrees.degrees.map((degree, index) => (
            // Use 'index' as key if degrees don't have unique IDs
            <DegreeCard key={index} degree={degree} theme={theme} />
          ))}
        </div>
      </div>
    );
  }
}

export default Educations;
