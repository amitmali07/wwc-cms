import React from "react";
import "./ScrollSections.css";

import WWCLogo from "../../assets/logo.png";
import BannerVideo from "../../assets/Banner.mp4";

const ScrollSections = () => {
  return (
    <div className="scroll-wrapper">
      {/* Section 1 */}
      <section className="scroll-section section-dark">
        <div className="section-content">
          <img src={WWCLogo} alt="WWC Logo" className="section-icon" />
          <div className="section-divider"></div>
          <p className="section-text">
            Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="scroll-section section-light">
        <div className="section-content">
          <h2 className="section-title">Our Mission</h2>
          <p className="section-text">
            We empower people through design, innovation, and storytelling that
            inspires meaningful change.
          </p>
        </div>
      </section>

      {/* Section 3 - Video */}
      <section className="scroll-section section-video">
        <video autoPlay muted loop className="video-bg">
          <source src={BannerVideo} type="video/mp4" />
        </video>
        {/* <div className="video-overlay">
          <h2 className="video-title">Welcome to the Future</h2>
        </div> */}
      </section>
    </div>
  );
};

export default ScrollSections;
