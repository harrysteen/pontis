import React, { useState } from "react";
import "./Navbar.css";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import pontislogo from "../assets/pontis-Logo.png";
import { HashLink } from "react-router-hash-link";

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
            {/* existing pages use NavLink so react-router can highlight the active link */}
            <NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink>
             

            {/* temporary anchors for sections that live on the home page
              the app currently doesn't have dedicated routes for these yet,
              so the links simply jump back to the appropriate section on
              the single‑page home layout */}
                       <HashLink smooth to="/#aboutt" onClick={() => setMenuOpen(false)}>
About
</HashLink>



              <HashLink smooth to="/#services" onClick={() => setMenuOpen(false)}>
  Services
</HashLink>


<HashLink smooth to="/#mentorr" onClick={() => setMenuOpen(false)}>
  Mentor 
</HashLink>

<HashLink smooth to="/#test-mode" onClick={() => setMenuOpen(false)}>
Testmonial
</HashLink>

 


          
            {/* <a href="/#testmoniall" onClick={() => setMenuOpen(false)}>Testimonials</a> */}

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