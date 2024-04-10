import styled from "styled-components";
import constants from "../../utils/constants";

export const EventsSliderContainer = styled.div`
  position: relative;
  min-height: 400px;
  height: 400px;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  .events-bg {
    width: 100%;
    height: auto;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
  }

  .wrapper {
    overflow: hidden;
    width: 800px;
    height: inherit;
    z-index: 1;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 20px;
    flex-direction: column;
  }

  .events-container {
    display: flex;
    justify-content: flex-start;
    position: relative;
    width: fit-content;
    height: fit-content;
  }

  .all-events {
    width: 100%;
    height: 100%;
    display: flex;
    gap: 20px;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
  }

  .events-wrapper {
    min-width: 320px;
    width: 320px;
    height: 200px;
    min-height: 200px;
    border-radius: 10px;
    overflow: hidden;
  }

  .event-image {
    min-width: inherit;
    width: inherit;
    height: inherit;
    min-height: inherit;
    object-fit: cover;
    object-position: center;
  }

  .left-arrow-button, .right-arrow-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    
  }

  .left-arrow-button {
    left: 0;
  }

  .right-arrow-button {
    right: 0;
  }
`;