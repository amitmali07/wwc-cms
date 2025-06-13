import React, { useState } from 'react';
import './ServicesSection.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import preview from '../../assets/preview.png';
import arrowBox from '../../assets/arrow-box.png';


const services = [
  {
    id: 1,
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
      'Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.',
    image: arrowBox,
    link: '/'
  },
  {
    id: 2,
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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at metus eget sapien hendrerit gravida. Sed in augue quis elit vestibulum gravida non vel purus.',
    image: arrowBox,
    link: '/'
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
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at metus eget sapien hendrerit gravida. Sed in augue quis elit vestibulum gravida non vel purus.',
    image: arrowBox,
    link: '/WorkDetails'
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
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at metus eget sapien hendrerit gravida. Sed in augue quis elit vestibulum gravida non vel purus.',
    image: arrowBox,
    link: '/'
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

          <div className={`service-expanded ${openIndex === index ? 'blue-theme' : 'black-theme'}`}>
            {openIndex === index && (
              <div className="service-content">
                <div className="left-content">
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

                <div className="right-preview">
                  {/* <div className="image-container">
                    <img
                      src={service.image}
                      alt="Service Preview"
                      className="preview-image"
                    />
                    <div className="view-icon">
                      <img src={preview} alt="View Icon" />
                    </div>
                  </div> */}
                  <a
                    href={service.link || "#"}
                    className="service-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={arrowBox} alt="Arrow Box" className="arrow-icon" />
                    <span>View Service</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceSection;
