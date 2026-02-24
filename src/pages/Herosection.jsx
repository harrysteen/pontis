import React, { useState, useEffect } from "react";
import "./Herosection.css";

/* --- First Slide Images --- */
import mentorPerson from "../assets/Customized-Mentorship.webp";
import mentorBg from "../assets/Customized-Mentorship-BG.webp";

/* --- Second Slide Images --- */
import powerskillperson from "../assets/Power-Skills-preson.webp";
import powerskillbg from "../assets/Power-Skills-BG.webp";

/* --- Background Image (if using) --- */
import bgImage from "../assets/hero-section-bg-nav.webp";

const Herosection = () => {
  /* Slide Data */
  const slides = [
    {
      title: "Customized Mentorship",
      person: mentorPerson,
      bg: mentorBg,
    },
    {
      title: "Power Skills Development",
      person: powerskillperson,
      bg: powerskillbg,
    },
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  /* Auto Loop */
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % slides.length);
        setFade(true);
      }, 300); // fade out duration

    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-left">
          <h1>
            Fastrack your career success <br />
            with{" "}
            <span className={fade ? "fade-in" : "fade-out"}>
              {slides[index].title}
            </span>
          </h1>

          <p>
            Expert-led mentorship and industry-aligned training to empower
            unique career journeys, while building communication, confidence,
            and professional skills for long-term success.
          </p>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="hero-right">

          {/* Gradient Glow */}
          <div className="circle-glow"></div>

          {/* Circle Background Image */}
        <div className="circle-ring">
  <img
    src={slides[index].bg}
    alt=""
    className={fade ? "fade-in" : "fade-out"}
  />
</div>

          {/* Outside Person Image */}
          <img
            src={slides[index].person}
            alt=""
            className={`mentor-cut ${fade ? "fade-in" : "fade-out"}`}
          />

        </div>

      </div>
    </section>
  );
};

export default Herosection;