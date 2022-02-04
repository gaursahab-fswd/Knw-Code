import React from "react";
import Logo from '../common/logo.png';
import '../Components/Footer.style.css';

const Footer = () => {
  return (
    <div className="container-fluid Footer">
       <footer className="container py-5">
      <div className="row">
        <div className="col-12 col-md">
    <img src={Logo} alt="logo-footer" />
          <h3 className="d-block mb-3 text-light">Know Code</h3>
          <div className="icons-media">
              <img src={'https://img.icons8.com/ios-glyphs/344/ffffff/facebook-new.png'} alt="" />
              <img src={'https://img.icons8.com/ios-glyphs/344/ffffff/instagram-new.png'} alt="" />
              <img src={'https://img.icons8.com/ios-glyphs/344/ffffff/youtube-play.png'} alt="" />
              <img src={'https://img.icons8.com/ios-glyphs/344/ffffff/twitter--v1.png'} alt="" />
          </div>
        </div>
        <div className="col-6 col-md">
          <h5>Web Dev</h5>
          <ul className="list-unstyled text-small">
            <li><a className="text-light" href="#">Front-End Development</a></li>
            <li><a className="text-light" href="#">Back-End Development</a></li>
            <li><a className="text-light" href="#">MEAN Stack</a></li>
            <li><a className="text-light" href="#">MERN Stack</a></li>
            <li><a className="text-light" href="#">Database</a></li>
            <li><a className="text-light" href="#">DevOps</a></li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>App Dev</h5>
          <ul className="list-unstyled text-small">
            <li><a className="text-light" href="#">Java</a></li>
            <li><a className="text-light" href="#">Kotlin</a></li>
            <li><a className="text-light" href="#">Another resource</a></li>
            <li><a className="text-light" href="#">Final resource</a></li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>Android</h5>
          <ul className="list-unstyled text-small">
            <li><a className="text-light" href="#">Business</a></li>
            <li><a className="text-light" href="#">Education</a></li>
            <li><a className="text-light" href="#">Government</a></li>
            <li><a className="text-light" href="#">Gaming</a></li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>Useful Links</h5>
          <ul className="list-unstyled text-small">
            <li><a className="text-light" href="#">Team</a></li>
            <li><a className="text-light" href="#">Locations</a></li>
            <li><a className="text-light" href="#">Privacy</a></li>
            <li><a className="text-light" href="#">Terms</a></li>
          </ul>
        </div>
      </div>
    </footer>

    </div>
  );
};

export default Footer;
