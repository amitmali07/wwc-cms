import React from 'react';
import './HamburgerMenu.css';
import logo from '../assets/logo.png'; // Adjust path as needed

function HamburgerMenu({ isOpen, onClose }) {
  return (
    <div className={`hamburger-overlay ${isOpen ? 'open' : ''}`}>
      <div className="left-panel">
        <img src={logo} alt="Logo" className="menu-logo" />

        <div className="nav-columns">
          <div className="column">
            <a href="/">Home</a>
            <a href="/service">Service</a>
            <a href="/project">Project</a>
            <a href="/process">Process</a>
            <a href="/us">Us</a>
          </div>
          <div className="column">
            <a href="/contact">Contact</a>
            <a href="/career">Career</a>
            <a href="/blog">Blog</a>
          </div>
        </div>

        <div className="social">
          <p>Social Media</p>
          <div className="icons">
            <i className="fa-brands fa-instagram" />
            <i className="fa-brands fa-youtube" />
            <i className="fa-brands fa-facebook" />
            <i className="fa-brands fa-behance" />
          </div>
        </div>
      </div>

      <div className="right-panel">
        <button className="close-btn" onClick={onClose}>×</button>
        <img src={logo} alt="Logo" className="menu-logo big" />
        <h2>Bring your brand to life with visuals that resonate.<br />Let’s start today!</h2>
        <p>Send us a message and let's collaborate on your project.</p>
        <div className="buttons">
          <button>Let’s Collaborate</button>
          <button>Company Profile</button>
        </div>
      </div>
    </div>
  );
}

export default HamburgerMenu;
