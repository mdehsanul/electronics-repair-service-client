import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container-fluid navbar-dark bg-dark">
      <nav className="container navbar navbar-expand-lg">
        <div className="container-fluid">
          <span className="navbar-brand fs-3" style={{ color: "#ffdd00" }}>
            Electronics Repair Service
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto mb-2 mb-lg-0">
              <Link to="/" className="linkStyle">
                <span className="nav-link ms-3 fs-4 text-white link">Home</span>
              </Link>
              <Link to="/" className="linkStyle">
                <span className="nav-link ms-3 fs-4 text-white link">
                  Booking
                </span>
              </Link>
              <Link to="/" className="linkStyle">
                <span className="nav-link ms-3 fs-4 text-white link">
                  Admin
                </span>
              </Link>
              <Link to="/login" className="linkStyle">
                <button className="btn btn-outline-light ms-3 fs-4 navbarButton">
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
