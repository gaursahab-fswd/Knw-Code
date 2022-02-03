import React from "react";
import Logo from "../common/logo.png";
import "./Navigation.styles.css";

const Navigation = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light  position-sticky">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={Logo} alt="Logo-image" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Interview Prep
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Online Courses
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Front-End Developement
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Full-stack Web Development
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Android Developement
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link">Events</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Contact us</a>
              </li>
            </ul>
            <form className="d-flex justify-content-center">
              <button className="btn btn-outline-default Nav-login" type="submit">
                LogIn
              </button> &nbsp;&nbsp;
              <button className="btn btn-outline-default Nav-Enr" type="submit">
                Enroll Now
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
