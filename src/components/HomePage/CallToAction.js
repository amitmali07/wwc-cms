import React from 'react';
import './CallToAction.css';
import { ArrowUpRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <div className="cta-wrapper">
      <div className="cta-box">
        <h2 className="cta-heading">Bring your brand to life with visuals that resonate.</h2>
        <h3 className="cta-subheading">Let’s start today!</h3>
        <p className="cta-text">Send us a message and let’s collaborate on your project.</p>
        <div className="cta-buttons">
          <button className="cta-btn">
            Let’s Collaborate <ArrowUpRight size={18} />
          </button>
          <button className="cta-btn">
            Company Profile <ArrowUpRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
