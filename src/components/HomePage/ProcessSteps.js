import React, { useEffect, useRef, useState } from 'react';
import './ProcessSteps.css';

const steps = [
  {
    title: 'Discover',
    desc: 'We begin by understanding your brand’s vision, values, audience, and market realities. Whether you’re an FMCG, D2C brand, an eCommerce startup, or a real estate venture, we go deep to find out what makes you matter.',
    icon: require('../../assets/icons/After effects.png'),
  },
  {
    title: 'Define',
    desc: 'Here, we identify gaps, challenges, and opportunities. With over a decade of experience in brand consulting and digital marketing, we frame problems with the clarity needed to solve them creatively.',
    icon: require('../../assets/icons/Figma.png'),
  },
  {
    title: 'Design',
    desc: 'From crafting bold packaging to designing mobile-first websites and intuitive user experiences, this is where ideas take visual form. Our team of experts brings your story to life through thoughtful visuals, rooted in strategy.',
    icon: require('../../assets/icons/Illustrator.png'),
  },
  {
    title: 'Deliver',
    desc: 'We execute every concept with craft, whether it’s an eCommerce website, a responsive landing page, or a full FMCG brand identity system. Precision in delivery is where trust is built.',
    icon: require('../../assets/icons/Photoshop.png'),
  },
  {
    title: 'Elevate',
    desc: 'Post-launch isn’t an afterthought. We monitor, iterate, and enhance based on real feedback. With our performance-led digital marketing services, we help your brand grow long after the first impression.',
    icon: require('../../assets/icons/Illustrator.png'),
  },
];

const ProcessSteps = () => {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [expanded, setExpanded] = useState(Array(steps.length).fill(false));

  useEffect(() => {
    const container = containerRef.current;
    const onScroll = () => {
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const value = Math.min(Math.max(1 - rect.top / (windowHeight / 2), 0), 1);
      setProgress(value);
      container.style.setProperty('--progress', value);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleExpand = (index) => {
    setExpanded((prev) => {
      const newExpanded = [...prev];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };

  const textColor = progress > 0.5 ? '#000' : '#fff';

  return (
    <section className="process-section" ref={containerRef}>
      <div className="steps">
        {steps.map((step, index) => (
          <div className="step" key={index} style={{ color: textColor }}>
            <img src={step.icon} alt={step.title} className="step-icon" />
            <h3 style={{ color: textColor }}>{step.title}</h3>
            <p className={expanded[index] ? 'expanded' : ''}>
              {step.desc}
            </p>
            {!expanded[index] && (
              <button className="read-more" onClick={() => toggleExpand(index)}>
                Read more
              </button>
            )}
          </div>
        ))}
      </div>
      <div className="progress-bg" />
    </section>
  );
};

export default ProcessSteps;
