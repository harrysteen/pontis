import React, { useRef } from "react";
import "./Section3.css";

import demo1 from "../assets/mock.png";
import demo2 from "../assets/linkedin.png";
import demo3 from "../assets/resume.png";
import demo4 from "../assets/linkedin.png";
import client from "../assets/client.jpg";

import skyrocketImg from "../assets/Skyrocket-img.png";

const Section3 = () => {

  /* ⭐ ADD THIS */
  const sliderRef = useRef(null);

  let isDragging = false;
  let startX = 0;
  let startScrollLeft = 0;

  const onMouseDown = (e) => {  
    e.preventDefault();
    isDragging = true;
    startX = e.pageX;
    startScrollLeft = sliderRef.current.scrollLeft;
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const walk = e.pageX - startX;
    sliderRef.current.scrollLeft = startScrollLeft - walk;
  };

  const stopDragging = () => {
    isDragging = false;
  };

  return (
    <section className="section3" id="services">

      <div className="child-1">

      <div className="top-heading">
        <span className="dot"></span>
        <h5>
          Your Career Toolkit :
          <span className="highlight-text">
            {" "}Pontis helps engineers stay confident, competitive, and career-ready.
          </span>
        </h5>
      </div>

      {/* ⭐ ONLY THIS DIV UPDATED */}
      <div
        className="card-slider"
        ref={sliderRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={stopDragging}
        onMouseLeave={stopDragging}
      >

        <div className="card">
          <img src={demo1} alt="Mock Interviews" />
          <h3>Mock Interviews</h3>
          <p>
            Role-specific practice sessions that mirror real hiring scenarios,
            with actionable feedback to boost performance and confidence.
          </p>
        </div>

        <div className="card">
          <img src={demo2} alt="Resume Review" />
          <h3>Resume Review & Optimization</h3>
          <p>
            Comprehensive reviews that integrate role-relevant keywords,
            highlight achievements, and maximize visibility to employers.
          </p>
        </div>

        <div className="card">
          <img src={demo3} alt="LinkedIn Review" />
          <h3>LinkedIn Profile Review</h3>
          <p>
            Expert guidance to strengthen your professional profile,
            showcase measurable impact, and highlight achievements.
          </p>
        </div>

        <div className="card">
          <img src={demo4} alt="Career Coaching" />
          <h3>Career Coaching</h3>
          <p>
            Structured mentorship to help engineers grow strategically
            and stay competitive in evolving industries.
          </p>
        </div>

      </div>














      {/* ================= MENTOR SECTION ================= */}

        <div className="mentor-container">

      <div className="mentor-section" id="mentorr">

  {/* LEFT CONTENT */}
  <div className="mentor-left">
    <h2>
     <span className="gradient-name">  Meet Kiran Sathulur</span>
    </h2>
    <h5 className="mentor-role">Mechanical Engineer & Mentor</h5>

    <p>
      I am a Mechanical Engineer and industry leader with 15+ years of experience
      driving real-world impact across manufacturing, operations, and technical
      program management in highly regulated industries.
    </p>

    <p>
      I began my career on the manufacturing floor and seamlessly progressed
      into leadership roles guiding cross-functional teams—an experience that
      shaped my belief that engineering extends beyond theory to informed
      decisions, smart trade-offs, and collaboration that delivers real-world results.
    </p>
  </div>

  {/* CENTER IMAGE */}
  <div className="mentor-image">
    <img src={client} alt="Mentor" width={354} height={503} />
    <button className="mentor-btn">Talk to a Mentor →</button>
  </div>

  {/* RIGHT CONTENT */}
  <div className="mentor-right">
    <h4>
      <span className="gradient-text">Our Mission:</span> Empowering Engineers to Succeed
    </h4>

    <p>
      We help students and early-career engineers bridge the gap between academics
      and industry. Through mentorship and practical skills training, we prepare,
      empower, and enable them with the confidence, insight, and tools to launch
      meaningful, successful engineering careers.
    </p>

    <div className="mentor-stats">
      <h3 >15+ Years</h3>
      <p>in Engineering & Industry Leadership</p>

      <h3>3 Core Domains</h3>
      <p>Manufacturing, Operations, Program Management</p>
    </div>
  </div>

   </div>


</div>

 
      </div>






{/*     skyrocket-section      */}





 <section className="skyrocket-section">
      {/* heading sits above columns, padding maintained by section */}
      <div className="skyrocket-heading">
        <span className="skyrocket-dot"></span>
        <h2 className="skyrocket-title">Skyrocket to Success</h2>
      </div>

      <div className="skyrocket-container">
  
        {/* LEFT CONTENT */}
        <div className="skyrocket-content">
          
          <p className="skyrocket-description">
        Beyond personalized mentoring, we offer periodic training and knowledge-sharing 
        
        
        sessions led by industry experts. These sessions are designed to equip students and
         young 
        professionals with practical, industry-relevant skills.
          </p>

          <p className="skyrocket-tagline">
            Skill up, Link up, and Rise up
          </p>

          <button className="get-started">
            Get Started →
          </button>

        </div>

        {/* RIGHT IMAGE */}
        <div className="skyrocket-image-wrapper">
          <img
            src={skyrocketImg}
            alt="Mentorship discussion"
            className="skyrocket-image"
          />
        </div>

      </div>

      {/* Background Circle */}
      <div className="skyrocket-bg-shape"></div>
    </section>

    </section>
  );
};

export default Section3;