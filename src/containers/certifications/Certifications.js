import React, { Component } from "react";
import "./Certifications.css";
import { Fade } from "react-reveal";
import CertificationCard from "../../components/certificationCard/CertificationCard";

class Certifications extends Component {
  render() {
    const { theme, certifications } = this.props; // Destructuring props for better readability.
    return (
      <div className="main" id="certs">
        <div className="certs-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="certs-header" style={{ color: theme.text }}>
              Certifications
            </h1>
          </Fade>
        </div>
        <div className="certs-body-div">
          {certifications &&
            certifications.certifications.map((cert, index) => (
              <CertificationCard
                key={index} // Added key for each CertificationCard.
                certificate={cert}
                theme={theme}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default Certifications;
