import React from 'react';
import { Link } from "react-router-dom";
import './index.scss'


function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  sticky-top navbar-light bg-light pb-0">
        <div className="container">
          <a className="navbar-brand h1 pt-1 px-4" href="#">DAO</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
            <div className=" navbar-nav px-5">
              <Link to="/" className="nav-item nav-link px-4">
                <p className="nav-under">Home</p>
              </Link>
              <Link to="/" className="nav-item nav-link px-4">
                <p className="nav-under">Prices</p>
              </Link>
              <Link to="/" className="nav-item nav-link px-4">
                <p className="nav-under">Learn</p>
              </Link>
              <Link to="/" className="nav-item nav-link px-4">
                <p className="nav-under">Sign In</p>
              </Link>
              <Link to="/" className="nav-item nav-link px-4 ">
                <p className="nav-under">Get started</p>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>

  );
}

export default Header;
