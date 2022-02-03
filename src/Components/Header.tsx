import React from "react";
import "./Header.styles.css";
import banner from "../common/banner-icon.png";

const Header = () => {
  return (
    <div className="container-fluid text-light header-section">
      <div className="row">
        <div className="col-lg-6 header-content">
          <div className="container">
            <h1 className="animate__animated animate__jackInTheBox display-4">
          Let's grow <br/> your coding  level with <br/> <span id="header-para">Know Code</span>  
            </h1>
            <p id="header-paragraph">We know the value of learning.</p>
            <button id="know-button" className="btn ">
              KNOW MORE
            </button>
          </div>
        </div>
        <div className="col-lg-6 ">
          <img
            className="animate__animated animate__lightSpeedInRight"
            src={banner}
            alt="home-banner"
            id="header-banner"
          />
        </div>
      </div>
      <div className="container">
        <a href="#">
          <div id="mouse-scroll">
            <div className="mouse">
              <div className="mouse-in"></div>
            </div>
            <div>
              <span className="down-arrow-1"></span>
              <span className="down-arrow-2"></span>
              <span className="down-arrow-3"></span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Header;
