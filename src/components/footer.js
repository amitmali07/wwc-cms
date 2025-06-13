import React from 'react';
import './footer.css';
import logo from '../assets/logo_footer.png'; // Update this path as needed
import { FaInstagram, FaBehance, FaLinkedin, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className="footer-contact">
        <div>
          <h4>[Interested]</h4>
          <p>
            Contact us to evolve your business, whether you're a global brand or an emerging start-up. Let's work together.
          </p>
        </div>
        <div>
          <h4>[Contact]</h4>
          <p>halo@studiovanadium.com</p>
          <p>+62 821-4266-7785</p>
        </div>
        <div>
          <h4>[View on Map]</h4>
          <p>Jl. Saronojiwo I No. 33 Surabaya, 60299</p>
          <p>East Java – Indonesia</p>
        </div>
      </div>

      <div className="footer-social">
        <h4>[Social Media]</h4>
        <div className="social-links">
          <a href="/" target="_blank" rel="noreferrer"><FaInstagram /> Instagram</a>
          <a href="/" target="_blank" rel="noreferrer"><FaBehance /> Behance</a>
          <a href="/" target="_blank" rel="noreferrer"><FaLinkedin /> LinkedIn</a>
          <a href="/" target="_blank" rel="noreferrer"><FaYoutube /> Youtube</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
