import React from "react";
import { Container } from "./brochure.styles";
import localdb from "../../utils/localdb";

const Brochure = () => {

  return (
    <Container>
      {/* BROCHURE HEADER CONTAINER */}
      <div className="brochure-header-container">
        <h2 className="brochure-header-text anime" data-move="move-up">Strict Quality Control System</h2>
        <div className="header-divider anime" data-move="move-left" data-delay={0.2}></div>
      </div>

      {/* BROCHURE CONTENT CONTAINER */}
      <div className="brochure-content-container anime" data-move="move-up" data-delay={0.2}>
        <p className="brochure-content">
          Quality is checked at every stage from the material selection to slitting, pipe making, polishing,
          finished- product testing, packaging and warehousing every stage is strictly controlled , to ensure
          best product reaches in hand of customers.
          <br />
          <br />
          We are equipped with the most advanced and sophisticated products testing equipment to
          control our product quality at stage.
        </p>
      </div>

      {/* BROCHURE BUTTON CONTAINER */}
      <div className="brochure-button-container anime" data-move="move-up" data-delay={0.3}>
        <button type="button" className="brochure-button" onClick={() => { window.open(localdb.urls.brochure, "_blank") }}>Download Brochure</button>
      </div>
    </Container>
  );
};

export default Brochure;