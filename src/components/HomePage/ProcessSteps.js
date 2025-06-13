import React, { useEffect, useRef } from 'react';
import './ProcessSteps.css';

// const steps = [
//   { title: 'Discover', desc: 'Understand your brand, goals, market, and audience' },
//   { title: 'Define', desc: 'Identify key challenges and opportunities' },
//   { title: 'Design', desc: 'Craft concepts, iterate visual ideas, create prototypes' },
//   { title: 'Deliver', desc: 'Execute the final design with precision' },
//   { title: 'Elevate', desc: 'Analyze performance, gather feedback, refine' },
// ];
const steps = [
  {
    title: 'Discover',
    desc: 'Understand your brand, goals, market, and audience',
    icon: require('../../assets/icons/After effects.png'),
  },
  {
    title: 'Define',
    desc: 'Identify key challenges and opportunities',
    icon: require('../../assets/icons/Figma.png'),
  },
  {
    title: 'Design',
    desc: 'Craft concepts, iterate visual ideas, create prototypes',
    icon: require('../../assets/icons/Illustrator.png'),
  },
  {
    title: 'Deliver',
    desc: 'Execute the final design with precision',
    icon: require('../../assets/icons/Photoshop.png'),
  },
  {
    title: 'Elevate',
    desc: 'Analyze performance, gather feedback, refine',
    icon: require('../../assets/icons/Illustrator.png'),
  },
];


const ProcessSteps = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const onScroll = () => {
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = Math.min(Math.max(1 - rect.top / (windowHeight / 2), 0), 1);
      container.style.setProperty('--progress', progress);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="process-section" ref={containerRef}>
      <div className="steps">
        {steps.map((step, index) => (
          <div className="step" key={index}>
            <img src={step.icon} alt={step.title} />
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
      <div className="progress-bg" />
    </section>
  );
};

export default ProcessSteps;
