import React, { useEffect, useRef, useState } from "react";
import { ProductGradesContainer, QualityContainer } from "./quality.styles";
import PageTitle from "../../components/page.title/PageTitle";
import localdb from "../../utils/localdb";
import observer from "../../utils/observer";
import uid from "../../utils/uid";
// import jslImage from "../../assets/images/jsl-image.jpg";
import manufacturingProcess from "../../assets/images/manufacturing_process.jpg";
import MessageBox from "../../components/message.box/MessageBox";

const Quality = () => {
  const [showGrade, setShowGrade] = useState(() => ({
    g200: false,
    g300: false,
  }));

  const certContainer = useRef();

  const certificatesLength = localdb.certificates.length - 1;

  const count = useRef(1);

  useEffect(() => {
    const resizeCertificates = () => {
      const { width } = certContainer.current.getBoundingClientRect();
      certContainer.current.style.transform = `translateX(-${
        width * count.current
      }px)`;
    };

    window.addEventListener("resize", resizeCertificates);

    return () => {
      window.removeEventListener("resize", resizeCertificates);
    };
  }, []);

  // eslint-disable-next-line no-unused-vars
  const handleNextButton = () => {
    const { width } = certContainer.current.getBoundingClientRect();
    if (count.current < certificatesLength) {
      count.current++;
      certContainer.current.style.transform = `translateX(-${
        width * count.current
      }px)`;
    } else {
      return;
    }
  };

  // eslint-disable-next-line no-unused-vars
  const handlePrevButton = () => {
    const { width } = certContainer.current.getBoundingClientRect();
    if (count.current > 0) {
      count.current--;
      certContainer.current.style.transform = `translateX(-${
        width * count.current
      }px)`;
    } else {
      return;
    }
  };

  const handleShowGradeButton = (grade) => {
    grade === 200
      ? setShowGrade((prevData) => ({ ...prevData, g200: !prevData.g200 }))
      : setShowGrade((prevData) => ({ ...prevData, g300: !prevData.g300 }));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const anime = document.querySelectorAll(".anime");
    observer(Object.values(anime));
  }, []);

  return (
    <QualityContainer>
      {/* ABOUT SECTION */}
      <section className="about-section">
        <PageTitle pageName="Product Quality" />
      </section>

      {/* STEEL QUALITY */}
      {/* <section className="steel-quality-section"> */}
      {/* STEEL QUALITY CONTAINER */}
      {/* <div className="steel-quality-container"> */}
      {/* BISHNU QUALITY WRAPPER */}
      {/* <div className="bishnu-quality-wrapper">
            <h1 className="header-text anime" data-move="move-up">Product Quality</h1>
            <p className="header-tag anime" data-move="move-left" data-delay={0.1}>Bishnu Steel strives for total customer satisfaction by consistently supplying quality stainless steel pipes and tubes conforming to mutually agreed product specifications & delivery schedule.</p>
            <p className="header-tag anime" data-move="move-left" data-delay={0.2}>We are committed to involve all employees for the continuous improvement of our product in quality & customer satisfaction & achieve leadership in the global market.</p>
            <p className="header-tag anime" data-move="move-left" data-delay={0.3}><u>We provide services with</u></p>
            <p className="header-tag anime" data-move="move-left" data-delay={0.4}>&raquo; Stated Quality</p>
            <p className="header-tag anime" data-move="move-left" data-delay={0.5}>&raquo; Timely Delivery</p>
            <p className="header-tag anime" data-move="move-left" data-delay={0.6}>&raquo; Quality Services at all Times</p>
          </div> */}

      {/* BISHNU QUALITY CERTFICATE WRAPPER */}
      {/* <div className="bishnu-quality-certificate-wrapper anime" data-move="move-right" data-delay={0.1}> */}
      {/* ALL CERTIFICATES CONTAINER */}
      {/* <div ref={certContainer} className="all-certificates-container">
              {
                localdb.certificates.map((item, index) => {
                  return <img key={index} src={item} alt="bishnu steel certificate" className="certificate-image" />
                })
              }
            </div> */}

      {/* SCROLL BUTTONS */}
      {/* <button type="button" className="scroll-button scroll-button-left" onClick={handlePrevButton}>&lt;</button>
            <button type="button" className="scroll-button scroll-button-right" onClick={handleNextButton}>&gt;</button>
          </div>
        </div>
      </section> */}

      {/* JSL SECTION */}
      {/* <section className="jsl-section"> */}
      {/* JSL WRAPPER */}
      {/* <div className="jsl-wrapper"> */}
      {/* JSL CERTFICATE CONTAINER */}
      {/* <div className="jsl-certificate-container anime" data-move="move-left">
            <img src={jslImage} alt="jsl certificate" className="jsl-certificate-image" />
          </div> */}

      {/* JSL CONTENT CONTAINER */}
      {/* <div className="jsl-content-container">
            <p className="header-tag anime" data-move="move-right" data-delay={0.1}>We have well Equipped in house testing laboratory. We assessed and found to be in accordance with the requirements of quality standards. We have Certificate that the Quality Management System ISO 9001:2015 Certificate.</p>
            <h1 className="header-text anime" data-move="move-right" data-delay={ 0.2}>MANUFACTURE AND SUPPLIER OF STAINLESS STEEL PIPES, TUBES, AND S.S COIL.</h1>
            <p className="header-tag anime" data-move="move-right" data-delay={0.3}>We have well equipped in-house testing laboratory. We ensure output quality by adopting the following procedure batch-wise.</p>
            <p className="header-tag anime" data-move="move-right" data-delay={0.4}>&raquo; Testing for Raw Material</p>
            <p className="header-tag anime" data-move="move-right" data-delay={0.5}>&raquo; Process control method</p>
            <p className="header-tag anime" data-move="move-right" data-delay={0.6}>&raquo; Finished products test</p>
            <p className="header-tag anime" data-move="move-right" data-delay={0.7}>Our technically advanced Rectangular Pipes are intended to serve various industries such as Automobile & Ancillaries, Furniture, Railways, Engineering, etc.</p>
          </div>
        </div>
      </section> */}

      {/* MANUFACTURING SECTION */}
      <section className="manufacturing-section">
        {/* MANUFACTURING WRAPPER */}
        <div className="manufacturing-wrapper">
          {/* HEADER CONTAINER */}
          <div className="header-container">
            <h2 className="header-text anime" data-move="move-down">
              Manufacturing Process
            </h2>
            <img
              src={manufacturingProcess}
              alt="tube mill"
              className="yxh-image anime"
              data-move="move-down"
              data-delay={0.2}
            />
          </div>

          {/* DATA CONTAINER */}
          <div className="data-container">
            {/* DATA WRAPPER */}
            <div className="data-wrapper">
              <h3 className="header-text anime" data-move="move-left">
                Stainless steel tube mill YXH Z40 machinery process.
              </h3>
              <p
                className="header-tag anime"
                data-move="move-down"
                data-delay={0.1}>
                It appears that "YXH Z40" might be a model or code associated
                with a stainless steel tube mill machinery process. Stainless
                steel tube mills are used in the manufacturing of stainless
                steel tubes and pipes. They typically involve several stages in
                the manufacturing process. Here's a general overview of the
                process involved in stainless steel tube manufacturing:
              </p>
              <p
                className="header-tag anime"
                data-move="move-down"
                data-delay={0.1}>
                &raquo; <strong>Material Preparation:</strong> Raw stainless
                steel coils are loaded onto the machine. These coils are often
                in the form of flat strips or sheets.
              </p>
              <p
                className="header-tag anime"
                data-move="move-down"
                data-delay={0.1}>
                &raquo; <strong>Uncoiling:</strong> The stainless steel coil is
                fed into the machine, and the uncoiling process begins. This
                involves gradually unwinding the coil to provide a continuous
                feed of material.
              </p>
              <p
                className="header-tag anime"
                data-move="move-down"
                data-delay={0.1}>
                &raquo; <strong>Forming:</strong> The stainless steel strip is
                passed through a series of rollers and shaped into a tubular
                form. This process involves bending and shaping the material to
                achieve the desired tube dimensions.
              </p>
              <p
                className="header-tag anime"
                data-move="move-down"
                data-delay={0.1}>
                &raquo; <strong>Welding:</strong> If the stainless steel tube is
                not seamless, the edges of the formed strip need to be welded
                together. Various welding methods can be used, such as
                high-frequency induction welding, TIG (Tungsten Inert Gas)
                welding, or laser welding.
              </p>
              <p
                className="header-tag anime"
                data-move="move-down"
                data-delay={0.1}>
                &raquo; <strong>Sizing:</strong> The welded tube is then passed
                through additional sets of rollers that help refine the shape
                and dimensions of the tube to meet specific tolerances.
              </p>
              <p
                className="header-tag anime"
                data-move="move-down"
                data-delay={0.1}>
                &raquo; <strong>Cooling:</strong> After sizing, the tube may go
                through a cooling process to reduce its temperature and
                stabilize its structure.
              </p>
              <p
                className="header-tag anime"
                data-move="move-down"
                data-delay={0.1}>
                &raquo; <strong>Cutting:</strong> The continuous stainless steel
                tube is cut into individual lengths using cutting blades or
                saws. This results in separate stainless steel tubes or pipes.
              </p>
              <p
                className="header-tag anime"
                data-move="move-down"
                data-delay={0.1}>
                &raquo; <strong>Finishing:</strong> The cut tubes may undergo
                additional finishing processes such as straightening, polishing,
                or cleaning to achieve the desired surface finish and quality.
              </p>
              <p
                className="header-tag anime"
                data-move="move-down"
                data-delay={0.1}>
                &raquo; <strong>Inspection:</strong> The finished stainless
                steel tubes are inspected for defects, dimensions, and overall
                quality. Any tubes that do not meet the required standards are
                typically removed from the production line.
              </p>
              <p
                className="header-tag anime"
                data-move="move-down"
                data-delay={0.1}>
                &raquo; <strong>Packaging:</strong> The inspected and approved
                stainless steel tubes are bundled, packaged, and prepared for
                distribution or further processing, depending on the intended
                use.
              </p>
              <p
                className="header-tag anime"
                data-move="move-down"
                data-delay={0.1}>
                The term "YXH Z40" likely refers to a specific model or code for
                a stainless steel tube mill machinery. The "Z40" might indicate
                a particular variant or configuration of the machinery. To get
                detailed information about the machinery process associated with
                the "YXH Z40" model, I recommend reaching out to the
                manufacturer of the equipment or referring to the equipment's
                documentation. Manufacturers often provide technical
                specifications and operation manuals that outline the specific
                processes and capabilities of their machinery.
              </p>

              <h3 className="header-text anime" data-move="move-left">
                Stainless steel tube mill YXH Z40 anti-dust machinery process.
              </h3>
              <p
                className="header-tag anime"
                data-move="move-down"
                data-delay={0.1}>
                It seems like you're looking for information about the
                "anti-dust" machinery process associated with the stainless
                steel tube mill model "YXH Z40." While I don't have specific
                information about this particular model, I can provide you with
                a general idea of what an "anti-dust" machinery process might
                involve in the context of a stainless steel tube mill or similar
                industrial equipment.
              </p>
              <p
                className="header-tag anime"
                data-move="move-down"
                data-delay={0.1}>
                An "anti-dust" process usually refers to methods and equipment
                designed to minimize the generation and spread of dust particles
                in industrial environments. Dust can be generated during various
                stages of manufacturing, including material handling,
                processing, and finishing. In the context of a stainless steel
                tube mill, here's how an "anti-dust" process might be
                implemented:
              </p>
              <p
                className="header-tag anime"
                data-move="move-down"
                data-delay={0.1}>
                &raquo; <strong>Enclosures and Housings:</strong> Machinery
                components that generate dust, such as cutting, grinding, or
                welding units, could be enclosed in sealed housings. These
                housings are equipped with appropriate ventilation systems to
                capture and contain dust at its source.
              </p>
              <p
                className="header-tag anime"
                data-move="move-down"
                data-delay={0.1}>
                &raquo; <strong>Ventilation and Exhaust Systems:</strong>{" "}
                Effective ventilation systems are crucial for removing dust and
                airborne particles from the working area. These systems use fans
                and filters to draw in air, capture dust, and then expel
                filtered air outside the working environment.
              </p>
              <p
                className="header-tag anime"
                data-move="move-down"
                data-delay={0.1}>
                &raquo; <strong>Dust Collection Systems:</strong> Industrial
                dust collectors are designed to capture and collect dust
                particles from the air. These collectors use methods such as
                cyclonic separation, fabric filtration, or electrostatic
                precipitation to efficiently remove dust from the air.
              </p>
              <p
                className="header-tag anime"
                data-move="move-down"
                data-delay={0.1}>
                &raquo; <strong>Air Purification:</strong> In some cases, air
                purification systems might be used to further clean the air
                before releasing it back into the environment. This ensures that
                any remaining particles are removed before the air is
                discharged.
              </p>
              <p
                className="header-tag anime"
                data-move="move-down"
                data-delay={0.1}>
                &raquo; <strong>Regular Cleaning and Maintenance:</strong>{" "}
                Proper housekeeping practices are essential to prevent the
                accumulation of dust on machinery and surfaces. Regular cleaning
                and maintenance routines help keep the working environment
                dust-free.
              </p>
              <p
                className="header-tag anime"
                data-move="move-down"
                data-delay={0.1}>
                &raquo; <strong>Employee Protection:</strong> Workers should be
                provided with appropriate personal protective equipment (PPE),
                such as masks and respirators, to prevent inhalation of dust
                particles.
              </p>
              <p
                className="header-tag anime"
                data-move="move-down"
                data-delay={0.1}>
                &raquo; <strong>Process Optimization:</strong> The design and
                layout of the stainless steel tube mill can be optimized to
                minimize dust generation. For example, using cutting methods
                that produce fewer airborne particles or implementing efficient
                coolant systems can help reduce dust.
              </p>
              <p
                className="header-tag anime"
                data-move="move-down"
                data-delay={0.1}>
                &raquo; <strong>Education and Training:</strong> Proper training
                of employees about the risks of dust exposure and the importance
                of following anti-dust procedures can contribute to a safer
                working environment.
              </p>
              <p
                className="header-tag anime"
                data-move="move-down"
                data-delay={0.1}>
                It's important to note that the specific "anti-dust" measures
                taken can vary based on the machinery model, the manufacturing
                process, and the industry standards. For detailed information
                about the "anti-dust" machinery process associated with the "YXH
                Z40" stainless steel tube mill model, I recommend contacting the
                manufacturer or referring to the equipment's documentation and
                user manuals. Manufacturers often provide guidance on how to
                operate and maintain their equipment while ensuring safety and
                environmental considerations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GRADES SECTION */}
      <section className="grades-section">
        {/* GRADES SECTION WRAPPER */}
        <div className="grades-section-wrapper">
          {/* GRADE HEADER TITLE */}
          <h2
            className="grade-header-title header-text anime"
            data-move="move-down">
            Stainless Steel Grades:
          </h2>

          {/* PRODUCT GRADE CONTAINER */}
          {localdb.quality.map((item, index) => (
            <ProductGradesContainer key={uid()}>
              <div className="product-grade-container">
                <p
                  className="content anime"
                  data-move="move-down"
                  data-delay={0.1}>
                  <strong>
                    {item.type} series of stainless steel products:{" "}
                  </strong>
                  {item.content}
                </p>
                <p
                  className="content-link anime"
                  data-move="move-down"
                  data-delay={0.1}>
                  Click the link here to know more about the{" "}
                  <u
                    className="underline anime"
                    data-move="move-right"
                    data-delay={0.5}
                    onClick={() => handleShowGradeButton(item.type)}>
                    {item.type} series of stainless steel products.
                  </u>
                </p>

                {/* DROPDOWN CONTAINER */}
                {showGrade?.[`g${item.type}`] && (
                  <div className="drop-down-container">
                    <div
                      className="drop-down-content"
                      dangerouslySetInnerHTML={{
                        __html: item.dropDownContent,
                      }}></div>
                    <button
                      type="button"
                      className="close-button"
                      onClick={() => handleShowGradeButton(item.type)}>
                      Close
                    </button>
                  </div>
                )}
              </div>
            </ProductGradesContainer>
          ))}
        </div>
      </section>

      {/* MESSAGE BOX SECTION */}
      <section className="message-box-section">
        <MessageBox />
      </section>
    </QualityContainer>
  );
};

export default Quality;
