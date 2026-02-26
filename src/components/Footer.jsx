import React from "react";
import "./Footer.css";

import logo from "../assets/pontis-Logo.png"; // your logo
import { FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">

      {/* Top Title */}
      <div className="footer-title">
        <div className="line"></div>
        <h2>PONTIS LLC</h2>
        <div className="line"></div>
      </div>

      {/* Footer Content */}
      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-left">
          <img src={logo} alt="logo" />
          <p>© 2025 Pontis LLC</p>
          <span>All rights reserved.</span>
        </div>

        {/* CENTER */}
        <div className="footer-center">
          <h3>Explore</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Mentor</li>
            <li>Testimonials</li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="footer-right">
          <h3>Contact us</h3>
          <p>pontishub@gmail.com</p>

          <div className="social-icons">
            <FaXTwitter />
            <FaYoutube />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>

      </div>

    </footer>
  );
};

export default Footer;