import React, { useEffect } from "react";
import { EndUsesContainer } from "./end.uses.styles";
import localdb from "../../utils/localdb";
import PageTitle from "../../components/page.title/PageTitle";
import Gallery from "../../components/gallery/Gallery";
import MessageBox from "../../components/message.box/MessageBox";
import observer from "../../utils/observer";

const EndUses = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const anime = document.querySelectorAll(".anime");
    observer(Object.values(anime));
  }, []);

  return (
    <EndUsesContainer>
      {/* ABOUT SECTION */}
      <section className="about-section">
        <PageTitle pageName="End Uses of Stainless Steels" />
      </section>

      {/* GALLERY OF WINDOW SECTION */}
      <section className="gallery-of-windows-section gallery-sections anime" data-move="move-up">
        <Gallery title="Windows" images={localdb.endUses.windows} />
      </section>

      {/* GALLERY OF DOORS SECTION */}
      <section className="gallery-of-doors-section gallery-sections anime" data-move="move-up" data-delay={0.2}>
        <Gallery title="Doors" images={localdb.endUses.doors} />
      </section>

      {/* GALLERY OF GATES SECTION */}
      <section className="gallery-of-gates-section gallery-sections anime" data-move="move-up" data-delay={0.2}>
        <Gallery title="Gates" images={localdb.endUses.gates} />
      </section>

      {/* GALLERY OF STAIRS SECTION */}
      <section className="gallery-of-stairs-section gallery-sections anime" data-move="move-up" data-delay={0.2}>
        <Gallery title="Railings" images={localdb.endUses.stairs} />
      </section>

      {/* GALLERY OF SWINGS SECTION */}
      <section className="gallery-of-swings-section gallery-sections anime" data-move="move-up" data-delay={0.2}>
        <Gallery title="Swings" images={localdb.endUses.swings} />
      </section>

      {/* GALLERY OF FURNITURES SECTION */}
      <section className="gallery-of-furnitures-section gallery-sections anime" data-move="move-up" data-delay={0.2}>
        <Gallery title="Furnitures" images={localdb.endUses.furnitures} />
      </section>

      {/* GALLERY OF HOSPITAL SECTION */}
      <section className="gallery-of-hospita-section gallery-sections anime" data-move="move-up" data-delay={0.2}>
        <Gallery title="Hospital" images={localdb.endUses.hospital} />
      </section>

      {/* GALLERY OF KITCHEN SECTION */}
      {/* <section className="gallery-of-kitchen-section gallery-sections anime" data-move="move-up" data-delay={0.2}>
        <Gallery title="Kitchen" images={localdb.endUses.kitchen} />
      </section> */}

      {/* NEED HELP SECTION */}
      <section className="need-help-section">
        <MessageBox />
      </section>
    </EndUsesContainer>
  );
};

export default EndUses;