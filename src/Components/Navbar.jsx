import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark navbar-custom ">
      <a className="navbar-brand name" href="#">getStockData();</a>
      <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item ">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#list">List</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#aboutus">About Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
