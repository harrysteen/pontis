import React from "react";
import "./Testmonials.css";
import bridgeDemo from "../assets/bridge-demo.webp"; // replace later

const Testmonials = () => {
  return (
    <section className="testmonials-section"  id="test-mode">

      <div className="testmonials-container">

        {/* Heading */}
        <div className="testmonials-heading">
          <span className="red-dot"></span>
          <h2>Testimonials :</h2>
        </div>



        {/* Cards */}
        <div className="testmonials-cards">

          <div className="testmonial-card">
            <p>
          “ Their guidance helped me better prepare for mechanical engineering
           interviews by focusing on core technical questions and how to structure clear, confident answers. Also, they provided actionable advice on tailoring my resume with role-relevant keywords and optimizing my LinkedIn profile to better align with the positions I’m targeting. The support was structured, actionable, and genuinely helpful in refining my
          overall job search strategy. ”
            </p>
            <h4>Nikhil Purohit</h4>
            <span>2024 - Graduated</span>
          </div>

          <div className="testmonial-card">
            <p>
             “As a new graduate , I was feeling lost about how to approach the job market and present myself professionally. Her guidance has been incredibly valuable, from helping me refine my resume to giving me real industrial insights that I didn’t fully understand in college.<br/>


She doesn’t just give general advice; she explains how the industry actually

 works and what employers look for. Because of her support, I feel more confident, better prepared, and much clearer about my career direction. I’m truly grateful for her mentorship during this important stage of 
my journey.”
            </p>
            <h4>Tharun Vaithya Devaraj</h4>
            <span>2023 - Graduated</span>
          </div>

          <div className="testmonial-card">
            <p>
             “ Pontis is a mentorship company focusing mainly on personalised career support 
             for students under the Mechanical engineering 
             domain, pursuing. ”
            </p>
            <h4>Lissa</h4>
            <span>2024 - Graduated</span>
          </div>

        </div>
      </div>

      {/* Bridge Image */}
      <div className="bridge-wrapper">
        <img src={bridgeDemo} alt="Bridge illustration" />
      </div>

    </section>
  );
};

export default Testmonials;