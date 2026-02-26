import React from "react";
import "./Section2.css";

 import img1 from "../assets/section2-img1.jpg";
import img2 from "../assets/section-2-img2.jpg";
import img3 from "../assets/section2-img3.jpg";
import img4 from "../assets/studentswalking.jpg";

const Section2 = () => {
  return (
    <section className="section2">



         {/* Top Heading */}
          <div className="top-heading">
            <span className="dot"></span>
            <h5>
              Welcome to Pontis :
              <span className="highlight-text">
                {" "}Not software. Not theory. Real engineering careers—done right.
              </span>
            </h5>
          </div>

        
      <div className="section2-container">

        {/* LEFT SIDE IMAGES */}
        <div className="image-wrapper">
          <img src={img1} alt="student" className="img main-img" />
          <img src={img3} alt="engineering" className="img small-img" />
          <img src={img2} alt="professional" className="img bottom-img" />
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="content-wrapper">

          

          {/* Main Heading */}
          <h2 className="main-heading">
            At Pontis, we accelerate careers for students and professionals
            across all
            <span className="gradient-text">
              {" "}non-software engineering domains
            </span>
          </h2>

          {/* Tags */}
       <div className="tags-wrapper">
  <div className="tags-track">

    <div className="tag-item">
      <span>Mechanical</span>
      <span className="star">*</span>
    </div>

    <div className="tag-item">
      <span>Industrial</span>
      <span className="star">*</span>
    </div>

    <div className="tag-item">
      <span>Manufacturing</span>
      <span className="star">*</span>
    </div>

    <div className="tag-item">
      <span>Design</span>
    </div>

    {/* duplicate for infinite loop */}
    <div className="tag-item">
      <span>Mechanical</span>
      <span className="star">*</span>
    </div>

    <div className="tag-item">
      <span>Industrial</span>
      <span className="star">*</span>
    </div>

    <div className="tag-item">
      <span>Manufacturing</span>
      <span className="star">*</span>
    </div>

    <div className="tag-item">
      <span>Design</span>
    </div>

  </div>
</div>

          {/* Description */}
          <p className="description">
            Through personalized mentorship, industry-led guidance, and hands-on training, we:
          </p>

          {/* Bullet Points */}
          <ul className="points">
            <li>Bridge critical knowledge gaps between academics and real-world engineering expectations.</li>
            <li>Master industry terminology and best practices to become fluent in their profession.</li>
            <li>Develop confidence and professional acumen to excel in interviews and workplace challenges.</li>
            <li>Build a strong personal brand with tailored resume and LinkedIn optimization.</li>
          </ul>

        </div>
      </div>










      <section className="value-section">

  <div className="top-heading">
        <span className="dot"></span>
        <h5>
          Our Value Proposition :
          <span className="highlight-text">
            {" "}Because great engineers need more than a degree.
          </span>
        </h5>
      </div>

        

  <div className="value-container">





    

    {/* LEFT CONTENT */}
    <div className="value-content">

    

      <ul className="value-points">
        <li>Gain <span className="highlight-text2">practical, job-ready skills</span> in Risk Management, Lean Manufacturing, Supply Chain, Quality Assurance, and more.</li>
        <li>Receive <span className="highlight-text2">personalized guidance</span> to become industry-ready competitive, and confident in your career path.</li>
        <li>Participate in <span className="highlight-text2">expert-led training and knowledge sessions</span>to master real-world, industry-relevant skills.</li>
      </ul>

      <button className="get-started">Get Started →</button>

    </div>

    {/* RIGHT IMAGE */}
    <div className="value-image">
      <img src={img4} alt="students walking" />
    </div>

  </div>

</section>
    </section>
  );
};

export default Section2;