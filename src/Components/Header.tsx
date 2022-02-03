import React from "react";
import "./Header.styles.css";
import banner from "../common/banner-icon.png";

const Header = () => {
  return (
    <div className="container-fluid text-light header-section">
      <div className="row">
        <div className="col-lg-6 pt-4 header-content">
          <div className="container pt-4">
            <h1 className="animate__animated animate__jackInTheBox display-1">
              &lt;Know <span id="header-heading">Code&#47;&gt;</span>
            </h1>
            <p id="header-para">We know the value of learning.</p>
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
