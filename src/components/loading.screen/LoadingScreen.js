import React from "react";
import { LoadingScreenComponent } from "./loading.screen.styles";

const LoadingScreen = () => {
  return (
    <LoadingScreenComponent>
      <div className="loading-screen-wrapper">
        <div className="loding-screen-template-wrapper">
          <div className="big-box"></div>
          <div className="fake-tags">
            <div className="small-box"></div>
            <div className="small-box"></div>
            <div className="small-box-2"></div>
          </div>
        </div>

        <div className="loding-screen-template-wrapper">
          <div className="big-box"></div>
          <div className="fake-tags">
            <div className="small-box"></div>
            <div className="small-box"></div>
            <div className="small-box-2"></div>
          </div>
        </div>

        <div className="loding-screen-template-wrapper">
          <div className="big-box"></div>
          <div className="fake-tags">
            <div className="small-box"></div>
            <div className="small-box"></div>
            <div className="small-box-2"></div>
          </div>
        </div>
      </div>
    </LoadingScreenComponent>
  );
};

export default LoadingScreen;