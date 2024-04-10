import React from "react";
import { Container } from "./about.company.tag.styles";

const AboutCompanyTag = ({ aboutCompanyContent }) => {
  return (
    <Container>
      <div className="wrapper">
        <div className="content-container">
          <div className="top-container">
            <div className="header-container">
              <h1 className="heading anime" data-move="move-up">About Bishnu Steel</h1>
              <p className="about-tag anime" data-move="move-right" data-delay={0.2}>Commited to strict quality control and thoughtful customer services.</p>
            </div>
            <div className="about-content-container anime" data-move="move-right" data-delay={0.3}>
              <p className="about-content" dangerouslySetInnerHTML={{ __html: aboutCompanyContent }} ></p>
            </div>
          </div>
          <div className="bottom-container">
            <div className="left-container">
              <p className="couter-header anime" data-move="move-down" data-delay={0.4}>Founded In</p>
              <h1 className="counter anime" data-move="move-down" data-delay={0.6}>2022</h1>
            </div>
            <div className="middle-container">
              <p className="couter-header anime" data-move="move-down" data-delay={0.4}>Head Counts</p>
              <h1 className="counter anime" data-move="move-down" data-delay={0.6}>50</h1>
            </div>
            <div className="right-container">
              <p className="couter-header anime" data-move="move-down" data-delay={0.4}>Warehouse Space</p>
              <h1 className="counter anime" data-move="move-down" data-delay={0.6}>20,000 <span className="mini-text">Sq. Ft.</span></h1>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutCompanyTag;