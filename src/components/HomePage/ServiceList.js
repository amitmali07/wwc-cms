import React, { useEffect, useRef } from 'react';
import './ServiceList.css';

const services = [
  {
    number: '01',
    title: 'Brand Strategy',
    services: ['Logo Design', 'Brand Identity'],
    image: require('../../assets/service1.gif'),
  },
  {
    number: '02',
    title: 'UX/UI Design',
    services: ['Web UI', 'App UI'],
    image: require('../../assets/service2.gif'),
  },
  {
    number: '03',
    title: 'Content Creation',
    services: ['Photography', 'Videography'],
    image: require('../../assets/service3.gif'),
  },
  {
    number: '04',
    title: 'Development',
    services: ['Web Development', 'App Development'],
    image: require('../../assets/service4.gif'),
  },
  {
    number: '05',
    title: 'Marketing',
    services: ['SEO', 'Social Media'],
    image: require('../../assets/service5.gif'),
  },
];

const ServiceList = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const sections = sectionsRef.current; // 👈 Snapshot of the ref

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          } else {
            entry.target.classList.remove('active');
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);


  return (
    <div className="service-container">
      {services.map((service, index) => (
        <div
          className="section"
          key={index}
          ref={(el) => (sectionsRef.current[index] = el)}
        >
          <div className="text">
            <div className='service-tn'>
              <div className="number">{service.number}</div>
              <span className="service-line">|</span>
              <div className="title">{service.title}</div>
            </div>
            <div className="services">
              {service.services.map((srv, i) => (
                <span key={i}>{srv}</span>
              ))}
            </div>
          </div>
          <div className="image">
            <img src={service.image} alt={service.title} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceList;
