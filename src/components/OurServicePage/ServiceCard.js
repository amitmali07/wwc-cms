import React, { useState } from 'react';
import './ServiceCard.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const services = [
  {
    id: 1,
    title: 'Brand Experience Design',
    tags: [
      'Immersive Brand Experience',
      'Emotive Branding',
      'Brand Architecture',
      'Interactive Touchpoints',
      'Brand Audit Services',
      'Consumer Brand Insights',
      'Brand Equity Growth',
    ],
    description:
      'Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum...',
  },
  {
    id: 2,
    title: 'Brand Consulting',
    tags: [
      'Brand Strategy Framework',
      'Brand Positioning',
      'Brand Architecture',
      'Purpose-Driven Branding',
      'Brand Audit Services',
      'Consumer Brand Insights',
      'Brand Equity Growth',
    ],
    description:
      'Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum...',
  },
  {
    id: 3,
    title: 'Packaging Design',
    tags: [
      'Packaging Innovation',
      'Eco-Friendly Design',
      'Brand Architecture',
      'Retail Packaging',
      'Consumer Engagement',
      'Structural Packaging',
      'Shelf Appeal',
    ],
  },
  {
    id: 4,
    title: 'UX/UI Design & Development',
    tags: [
      'Human-Centered Design',
      'Mobile-First UX',
      'Micro-interaction Design',
      'Accessibility Design',
      'User Flow Optimization',
      'Conversion-Focused UI',
      'Design Systems',
    ],
  },
];

const ServiceSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="service-wrapper">
      {services.map((service, index) => (
        <div
          className={`service-card ${openIndex === index ? 'open' : ''}`}
          key={index}
        >
          <div className="service-header" onClick={() => toggleDropdown(index)}>
            <span className="service-index">0{index + 1}</span>
            <div className="service-line" />
            <span className="service-title">{service.title}</span>
            <span className="dropdown-icon">
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </div>

          <div className="tags">
            {service.tags.map((tag, i) => (
              <span className="tag" key={i}>
                {tag}
              </span>
            ))}
          </div>

          {openIndex === index && (
            <div className="service-expanded">
              <p className="description">{service.description}</p>
              <div className="trusted-client">
                <h4>Trusted client</h4>
                <div className="client-icons">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div key={i} className="shape" />
                  ))}
                </div>
              </div> 
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ServiceSection;
