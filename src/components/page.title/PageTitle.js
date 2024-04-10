import React from "react";
import { PageTitleContainer } from "./page.title.styles";

const PageTitle = ({ pageName }) => {
  return (
    <PageTitleContainer>
      {/* PAGE NAME SECTION */}
      <section className="page-name-section">
        <h2 className="page-name anime" data-move="move-up">{pageName}</h2>
      </section>
    </PageTitleContainer>

  );
};

export default PageTitle;