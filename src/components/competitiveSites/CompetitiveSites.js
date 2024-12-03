import React from "react";
import "./CompetitiveSites.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

class CompetitiveSites extends React.Component {
  render() {
    const { logos } = this.props; // Destructure props for cleaner code

    return (
      <div className="competitive-sites-main-div">
        <ul className="dev-icons">
          {logos.map((logo) => (
            <OverlayTrigger
              key={logo.siteName}
              placement="top"
              overlay={
                <Tooltip id={`tooltip-${logo.siteName}`}>
                  <strong>{logo.siteName}</strong>
                </Tooltip>
              }
            >
              <li className="competitive-sites-inline" name={logo.siteName}>
                <a
                  href={logo.profileLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span
                    className="iconify"
                    data-icon={logo.iconifyClassname}
                    style={logo.style}
                    data-inline="false"
                  ></span>
                </a>
              </li>
            </OverlayTrigger>
          ))}
        </ul>
      </div>
    );
  }
}

export default CompetitiveSites;
