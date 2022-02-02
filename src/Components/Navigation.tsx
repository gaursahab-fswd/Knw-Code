import React from 'react';
import Logo from '../common/logo.png';
import './Navigation.styles.css';

const Navigation = () =>{
    return(
        <div>
            <nav className="navbar navbar-expand-lg  bg-dark text-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src={Logo} alt='Logo-image' /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Interview Prep</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Online Courses
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Front-End Developement</a></li>
            <li><a className="dropdown-item" href="#">Backend Development</a></li>
            <li><a className="dropdown-item" href="#">Full-stack Web Development</a></li>
            <li><a className="dropdown-item" href="#">Android Developement</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Events</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact us</a>
        </li>
        <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
}

export default Navigation;