import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
import "./Experience.css";
import { experience } from "../../portfolio.js";
import { Fade } from "react-reveal";
import ExperienceImg from "./ExperienceImg";

class Experience extends Component {
  render() {
    const { theme, onToggle } = this.props; // Destructured props for easier readability

    return (
      <div className="experience-main">
        {/* Header Section */}
        <Header theme={theme} />
        <div className="basic-experience">
          {/* Heading Section */}
          <Fade bottom duration={2000} distance="40px">
            <div className="experience-heading-div">
              <div className="experience-heading-img-div">
                <ExperienceImg theme={theme} />
              </div>
              <div className="experience-heading-text-div">
                <h1
                  className="experience-heading-text"
                  style={{ color: theme.text }}
                >
                  {experience.title}
                </h1>
                <h3
                  className="experience-heading-sub-text"
                  style={{ color: theme.text }}
                >
                  {experience.subtitle}
                </h3>
                <p
                  className="experience-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {experience.description}
                </p>
              </div>
            </div>
          </Fade>
        </div>

        {/* Accordion Section */}
        <ExperienceAccordion sections={experience.sections} theme={theme} />

        {/* Footer Section */}
        <Footer theme={theme} onToggle={onToggle} />

        {/* Top Button */}
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Experience;
