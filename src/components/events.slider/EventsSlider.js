import React from "react";
import { EventsSliderContainer } from "./events.slider.styles";
import eventImg1 from "../../assets/images/event-1.jpg";
import eventImg2 from "../../assets/images/event-2.jpeg";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const EventsSlider = () => {
  return (
    <EventsSliderContainer>
      {/* BACKGROUND */}
      <svg className="events-bg" width="2253" height="434" viewBox="0 0 2253 434" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1487.62 0L0 218.507L2253 434V22.6042L1487.62 0Z" fill="#818181" fill-opacity="0.5" />
      </svg>
      <div className="wrapper">
        {/* HEADER CONTAINER */}
        <div className="header-container">
          <h2 className="header-text">News & Events</h2>
        </div>

        {/* EVENTS CONTAINER */}
        <div className="events-container">
          {/* ALL EVENTS */}
          <div className="all-events">
            {/* EVENTS WRAPPER */}
            <div className="events-wrapper">
              <img className="event-image" src={eventImg1} alt="event-image" />
            </div>
            {/* EVENTS WRAPPER */}
            <div className="events-wrapper">
              <img className="event-image" src={eventImg2} alt="event-image" />
            </div>
            {/* EVENTS WRAPPER */}
            <div className="events-wrapper">
              <img className="event-image" src={eventImg1} alt="event-image" />
            </div>
            {/* EVENTS WRAPPER */}
            <div className="events-wrapper">
              <img className="event-image" src={eventImg2} alt="event-image" />
            </div>
            {/* EVENTS WRAPPER */}
            <div className="events-wrapper">
              <img className="event-image" src={eventImg1} alt="event-image" />
            </div>
          </div>
          <button type="button" className="left-arrow-button"><ArrowBackIcon /></button>
          <button type="button" className="right-arrow-button"><ArrowForwardIcon /></button>
        </div>
      </div>
    </EventsSliderContainer>
  );
};

export default EventsSlider;