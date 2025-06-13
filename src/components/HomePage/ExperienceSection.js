import React from 'react';
import './ExperienceSection.css';

const ExperienceSection = () => {
  return (
    <section className="experience-section">
      <div className="experience-left">
        <h2 className="experience-heading">15+ Experience In Year</h2>
        <p className="experience-description">
          Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, 
          ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per 
          inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
        </p>
      </div>
      <div className="experience-right">
        <div className="stat">
          <h3 className="stat-number">1000+</h3>
          <p className="stat-label">Successful Project</p>
        </div>
        <div className="stat">
          <h3 className="stat-number">100+</h3>
          <p className="stat-label">Happy Client</p>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
