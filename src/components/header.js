import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png'; // ✅ Make sure this path is correct

const slides = ['Packaging', 'Branding', '360 Campaigns', 'UI/UX Design'];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollPercent, setScrollPercent] = useState(0);

  // Auto slide text
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Scroll progress for circular ring
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollPercent(scrolled);
    };


    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="header">
      {/* Logo & Auto Slider */}
      <div className="logo-container">
        <a href='./Home'> <img src={logo} alt="Logo" /> </a><span>|</span>
        <div className="vertical-text">
          <motion.p
            key={currentSlide}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.6 }}
          >
            {slides[currentSlide]}
          </motion.p>
        </div>
      </div>

      {/* Nav Links */}
      <nav className="nav-links">
        <NavLink to="/OurService" exact="true" activeclassname="active">Service</NavLink>
        <NavLink to="/Work" activeclassname="active">Work</NavLink>
        <NavLink to="/Process" activeclassname="active">Process</NavLink>
        <NavLink to="/Us" activeclassname="active">Us</NavLink>
      </nav>

      {/* Hamburger with scroll progress ring */}
      {!isOpen && (
        <button className="hamburger" onClick={() => setIsOpen(true)}>
          <Menu size={28} />
          <svg className="progress-ring" viewBox="0 0 40 40">
            <circle className="ring-bg" cx="20" cy="20" r="18" />
            <circle
              className="ring-fill"
              cx="20"
              cy="20"
              r="18"
              style={{
                strokeDasharray: 113,
                strokeDashoffset: 113 - (113 * scrollPercent) / 100,
              }}
            />
          </svg>
        </button>
      )}

      {/* Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="menu-left">
              <div>
                <img src={logo} alt="Logo" />
                <div className="links">
                  <div className="hamenu">
                    <NavLink to="/Home" onClick={() => setIsOpen(false)}>Home</NavLink>
                    <NavLink to="/OurService" onClick={() => setIsOpen(false)}>Service</NavLink>
                    <NavLink to="/Project" onClick={() => setIsOpen(false)}>Project</NavLink>
                    <NavLink to="/Process" onClick={() => setIsOpen(false)}>Process</NavLink>
                    <NavLink to="/Us" onClick={() => setIsOpen(false)}>Us</NavLink>
                  </div>
                  <div className="hamenu1">
                    <NavLink to="/ContactUs" onClick={() => setIsOpen(false)}>Contact</NavLink>
                    <NavLink to="/Career" onClick={() => setIsOpen(false)}>Career</NavLink>
                    <NavLink to="/blog" onClick={() => setIsOpen(false)}>Blog</NavLink>
                  </div>
                </div>
              </div>
              <div className="social-section">
                <h1>Social Media</h1>
                <div className="socials">
                  <i className="ri-instagram-line"></i>
                  <i className="ri-youtube-line"></i>
                  <i className="ri-facebook-line"></i>
                  <i className="ri-behance-line"></i>
                </div>
              </div>
            </div>

            <div className="menu-right">
              <button className="close-btn" onClick={() => setIsOpen(false)}>
                <X size={28} />
              </button>
              <img src={logo} alt="Logo" className="mb-6" />
              <h2>
                Bring your brand to life with visuals that resonate.<br />
                Let’s start today!
              </h2>
              <p>Send us a message and let's collaborate on your project.</p>
              <div className="buttons">
                <button>Let's Collaborate</button>
                <button>Company Profile</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
