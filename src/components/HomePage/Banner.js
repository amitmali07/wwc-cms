import React from 'react';
import './Banner.css';
import bannerVideo from '../../assets/Banner.mp4';

export default function Banner() {
  return (
    <section className="video-banner">
      <video className="video-bg" autoPlay loop muted playsInline>
        <source src={bannerVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* // <div className="banner-overlay">
      //   <h1>Creative Digital Solutions</h1>
      //   <p>Empowering brands through design and storytelling</p>
      //   <button>Explore Work</button>
      // </div> */}
    </section>
  );
}
