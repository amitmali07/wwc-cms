import React from "react";
import "./ServiceList.css";

import service1 from "../../assets/service1.gif";
import service2 from "../../assets/service2.gif";
import service3 from "../../assets/service3.gif";
import service4 from "../../assets/service4.gif";
import service5 from "../../assets/service5.gif";
import service6 from "../../assets/service5.gif";

const services = [
  {
    number: "01",
    title: "Brand Experience Design",
    tags: [
      "Brand positioning",
      "End-to-end branding solutions",
      "Product branding",
      "Strategic branding for businesses",
      "Branding and packaging design for FMCG",
    ],
    icon: service1,
  },
  {
    number: "02",
    title: "Brand Consulting",
    tags: [
      "Brand consulting services",
      "Brand strategy consulting",
      "Brand audit and analysis",
      "Brand positioning",
      "Brand growth strategy",
    ],
    icon: service2,
  },
  {
    number: "03",
    title: "Packaging Design",
    tags: [
      "Product packaging design",
      "Custom packaging design",
      "Packaging design services",
      "Packaging design for FMCG",
    ],
    icon: service3,
  },
  {
    number: "04",
    title: "UI/UX Design and Development",
    tags: [
      "UI/UX design services",
      "Responsive website design",
      "Landing page design services",
      "Web redesign services",
      "User-first design strategy",
    ],
    icon: service4,
  },
  {
    number: "05",
    title: "360-degree Digital Marketing",
    tags: [
      "Result-driven digital marketing",
      "SEO and SMM services",
      "Content marketing",
      "Email marketing",
    ],
    icon: service5,
  },
  {
    number: "06",
    title: "Exhibition Space Design",
    tags: [
      "Stall and exhibition design",
      "Exhibition booth design services",
      "Creative exhibition space designers",
      "Custom exhibition stall design",
    ],
    icon: service6,
  },
];

const ServiceList = () => {
  return (
    <div className="service-list">
      {services.map((service, index) => (
        <div className="service-item" key={index}>
          <div className="service-left">
            <div className="service-heading">
              <span className="service-number">{service.number}</span>
              <span className="service-title">{service.title}</span>
            </div>
            <div className="service-tags">
              {service.tags.map((tag, idx) => (
                <span className="service-tag" key={idx}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="service-right">
            <img src={service.icon} alt={service.title} className="service-icon" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceList;
