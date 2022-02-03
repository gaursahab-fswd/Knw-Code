import React from "react";
import "../Components/About.style.css";

const About = () => {
  return (
    <div className="container-fluid about-section">
      <div className="container pt-4">
        <div className="row">
          <div className="col">
            <h1 id="about-heading">Popular Courses</h1>
          </div>
          <div className="col d-flex justify-content-end">
            <a href="#" id="about-show">
              Show All
            </a>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="courses-section pt-4">
              <img
                src={
                  "https://seeklogo.com/images/K/kotlin-logo-30C1970B05-seeklogo.com.png"
                }
                alt="android"
              />
              <p className="text-light pt-2">Android with Kotlin</p>
            </div>
          </div>
          <div className="col">
            {" "}
            <div className="courses-section pt-4">
              <img
                src={
                  "https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png"
                }
                alt="android"
              />
              <p className="text-light pt-2">Front-End Development</p>
            </div>
          </div>
          <div className="col">
            {" "}
            <div className="courses-section pt-4">
              <img
                src={
                  "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"
                }
                alt="android"
              />
              <p className="text-light pt-2">Back-End Development</p>
            </div>
          </div>
          <div className="col">
            {" "}
            <div className="courses-section pt-4">
              <img
                src={
                  "https://seeklogo.com/images/C/c-logo-43CE78FF9C-seeklogo.com.png"
                }
                alt="android"
              />
              <p className="text-light pt-2">C++</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
