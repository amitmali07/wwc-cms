import React, { useRef, useEffect, useState } from "react";
import "./DemoService.css";

import service1 from "../../assets/service1.png";
import service2 from "../../assets/service2.png";
import service3 from "../../assets/service3.png";
import service4 from "../../assets/service4.png";
import service5 from "../../assets/service5.png";

const serviceData = [
  {
    number: "01",
    title: "Brand Experience Design",
    points: ["Immersive Brand", "Emotive Branding", "Brand Architecture"],
    image: service1,
  },
  {
    number: "02",
    title: "Packaging Design",
    points: ["Creative Labels", "Eco Packaging", "Retail Optimization"],
    image: service2,
  },
  {
    number: "03",
    title: "UI/UX Design",
    points: ["Wireframes", "Responsive Layout", "User Flow Mapping"],
    image: service3,
  },
  {
    number: "04",
    title: "Marketing Strategy",
    points: ["Content Marketing", "SEO", "Funnel Optimization"],
    image: service4,
  },
  {
    number: "05",
    title: "Motion Graphics",
    points: ["Product Animations", "Explainer Videos", "3D Visualization"],
    image: service5,
  },
];

const DemoService = () => {
  return (
    <div style={{ background: "#0f0f0f", minHeight: "100vh", color: "#fff" }}>
      {serviceData.map((item, idx) => (
        <AnimatedService key={idx} {...item} />
      ))}
    </div>
  );
};

const AnimatedService = ({ number, title, points = [], image }) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`demo-service-item ${isVisible ? "animate-in" : "hidden"}`}
    >
      <div className="demo-left">
        <h2>
          <span className="demo-number">{number}</span>
          <span className="demo-title">{title}</span>
        </h2>
        <div className="demo-points">
          {Array.isArray(points) &&
            points.map((point, idx) => (
              <span key={idx} className="point">
                {point}
              </span>
            ))}
        </div>
      </div>
      <div className="demo-right">
        <div className="icon-box">
          <img src={image} alt={title} />
        </div>
      </div>
    </div>
  );
};

export default DemoService;
