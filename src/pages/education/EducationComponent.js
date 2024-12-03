import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Educations from "../../containers/education/Educations";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import EducationImg from "./EducationImg";
import { competitiveSites } from "../../portfolio"; // Ensure competitiveSites is properly exported from portfolio.js
import "./EducationComponent.css";
import { Fade } from "react-reveal";

class Education extends Component {
  render() {
    const { theme } = this.props; // Destructure theme for cleaner code

    return (
      <div className="education-main">
        {/* Header Component */}
        <Header theme={theme} />

        {/* Main Education Section */}
        <div className="basic-education">
          <Fade bottom duration={2000} distance="40px">
            <div className="heading-div">
              <div className="heading-img-div">
                {/* Display Custom Education Image */}
                <EducationImg theme={theme} />
              </div>
              <div className="heading-text-div">
                {/* Education Title and Subtext */}
                <h1 className="heading-text" style={{ color: theme.text }}>
                  Education
                </h1>
                <h3 className="heading-sub-text" style={{ color: theme.text }}>
                  Basic Qualification and Certifications
                </h3>

                {/* Competitive Sites Section */}
                {competitiveSites && (
                  <CompetitiveSites logos={competitiveSites} />
                )}
              </div>
            </div>
          </Fade>

          {/* Educations Section */}
          <Educations theme={theme} />
        </div>

        {/* Footer and Top Button Components */}
        <Footer theme={theme} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Education;
