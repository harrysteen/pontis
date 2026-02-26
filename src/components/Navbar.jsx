import React, { useState } from "react";
import "./Navbar.css";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import pontislogo from "../assets/pontis-Logo.png";
 import Contact from "../components/Contact";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Left - Logo */}
        <div className="logo">
          <Link to="/">
            <img src={pontislogo} alt="Pontis LLC" />
          </Link>
        </div>

        {/* Hamburger */}
        <div className="nav-toggle" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Nav Links */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink to="/services" onClick={() => setMenuOpen(false)}>Services</NavLink>
          <NavLink to="/mentor" onClick={() => setMenuOpen(false)}>Mentor</NavLink>
          <NavLink to="/testimonials" onClick={() => setMenuOpen(false)}>Testimonials</NavLink>

          {/* ✅ MOBILE ONLY ACTIONS */}
          <div className="mobile-actions">
            <Link to="/signin" className="signin">Sign In</Link>
            <Link to="/contact" className="get-started">
              Get Started <FaArrowRight className="arrow" />
            </Link>
          </div>
        </nav>

        {/* Desktop Actions */}
        <div className="nav-actions">
          <Link to="/signin" className="signin">Sign In</Link>
          <Link to="/Contact" className="get-started">
            Get Started <FaArrowRight className="arrow" />
          </Link>
        </div>

      </div>
    </header>
  );
};

export default Navbar;