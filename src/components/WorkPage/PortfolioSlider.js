import React, { useEffect, useRef } from 'react';
import './PortfolioSlider.css';
import img1 from '../../assets/portfolio1.png';
import img2 from '../../assets/portfolio1.png';
import img3 from '../../assets/portfolio1.png';
import img4 from '../../assets/portfolio1.png';

const services = [
  { id: 1, title: 'Branding', image: img1, link: '/services/branding' },
  { id: 2, title: 'Web Design', image: img2, link: '/services/web-design' },
  { id: 3, title: 'UI/UX', image: img3, link: '/services/uiux' },
  { id: 4, title: 'Marketing', image: img4, link: '/services/marketing' },
];

const ServiceSlider = () => {
  const sliderRef = useRef(null);
  const isHoveredRef = useRef(false);
  const animationRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    // Duplicate content for seamless loop
    const duplicated = slider.innerHTML;
    slider.innerHTML += duplicated;

    const scroll = () => {
      if (!isHoveredRef.current && slider) {
        slider.scrollLeft += 0.5;
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        }
      }
      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  return (
    <div
      className="service-slider"
      ref={sliderRef}
      onMouseEnter={() => (isHoveredRef.current = true)}
      onMouseLeave={() => (isHoveredRef.current = false)}
    >
      {services.map((service, index) => (
        <div className="slide-item" key={index}>
          <img src={service.image} alt={service.title} />
          <div className="overlay">
            <a href={service.link} className="title-link">{service.title}</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceSlider;
