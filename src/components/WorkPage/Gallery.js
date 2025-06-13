import React, { useState } from 'react';
import './Gallery.css';
import package1 from '../../assets/project/urban-monk/urban-monk.mp4'
// import { ArrowUpRight } from 'lucide-react';

const services = {
  "Brand Experience Design": {
    title: "Brand Experience Design",
    images: ['#AA90F9', '#FF6F6F', '#3F4FFF', '#43B38F', '#CC70D0']
  },
  "Packaging": {
    title: "Packaging",
    images: ['package1', '#AA90F9', '#3F4FFF', '#CC70D0', '#43B38F']
  },
  "UX/UI Design": {
    title: "UX/UI Design",
    images: ['#3F4FFF', '#AA90F9', '#FF6F6F', '#43B38F', '#CC70D0']
  },
  "360° Digital Marketing": {
    title: "360° Digital Marketing",
    images: ['#43B38F', '#FF6F6F', '#3F4FFF', '#AA90F9', '#CC70D0']
  },
  "Exhibition & Space Design": {
    title: "Exhibition & Space Design",
    images: ['#CC70D0', '#3F4FFF', '#AA90F9', '#FF6F6F', '#43B38F']
  }
};

const GalleryWithFilter = () => {
  const [selected, setSelected] = useState('');

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  const selectedService = selected ? services[selected] : null;
  const displayCards = selectedService ? selectedService.images : Object.values(services).flatMap(service => service.images.slice(0, 1));

  return (
    <section className="gallery-wrapper">
      <div className="header-content">
        <div>
          <h2>Designs That Speak for Themselves</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit...</p>
        </div>
        <div className="dropdown-filter">
          <select value={selected} onChange={handleChange}>
            <option value="">All Services</option>
            {Object.keys(services).map((service, index) => (
              <option key={index} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>
      </div>

      {selectedService && (
        <h3 className="filter-title">{selectedService.title}</h3>
      )}

      <div className="gallery-grid">
        {displayCards.map((color, index) => (
          <div
            key={index}
            className={
              index === 0
                ? 'gallery-card large-card'
                : 'gallery-card small-card'
            }
            style={{ backgroundColor: color }}
          >
            <div className="show-more">
              <button>Show More</button>
              {/* <span className="icon">
                <ArrowUpRight size={16} />
              </span> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GalleryWithFilter;
