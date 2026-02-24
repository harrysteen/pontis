import React from "react";
import "./Navbar.css";
import { FaArrowRight } from "react-icons/fa";
import pontislogo from "../assets/pontis-Logo.png";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Left - Logo */}
        <div className="logo">
          <img src={pontislogo} alt="Pontis LLC"    />
        </div>

        {/* Center - Nav Links */}
        <nav className="nav-links">
          <a href="#" className="active">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Mentor</a>
          <a href="#">Testimonials</a>
        </nav>

        {/* Right - Actions */}
        <div className="nav-actions">
          <a href="#" className="signin">Sign In</a>
          <button className="get-started">
            Get Started <FaArrowRight className="arrow" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;