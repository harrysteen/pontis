 import React from "react";
import "./Contact.css";
import Navbar from "../components/Navbar";
import Testmonials from "../pages/Testmonials";
import Footer from "./Footer";

const Contact = () => {
  return (

    <>
    <section className="contact-section">
      <Navbar/>
      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-left">
          <h1 className="contact-title">
            <span className="gradient-text">LET’S CONNECT</span>
          </h1>

          <p className="contact-description">
            Have questions about mentorship or registration? Reach out to the
            Pontis team and we’ll get back to you with the right guidance and
            next steps.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-right">
          <h3 className="form-heading">Send a Message</h3>
          <p className="form-subtext">
            Fill out the form below with your details and message, and our team
            will get back to you as soon as possible with the right guidance
            and next steps.
          </p>

          <form className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label>Name</label>
                <input type="text" />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input type="email" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Interested in</label>
                <input type="text" />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" />
              </div>
            </div>

            <div className="form-group full-width">
              <label>Message</label>
              <textarea rows="3"></textarea>
            </div>

            <div className="submit-wrapper">
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </div>
          </form>
        </div>

      </div>

       

      <div className="contact-bg-shape"></div>


    
    </section>

      <Testmonials/>

      <Footer/>

      </>
  );
};

export default Contact;