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
  const containerRef = useRef(null);
  const indexRef = useRef(0);
  const isScrolling = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    const items = container.querySelectorAll(".demo-service-item");

    const onWheel = (e) => {
      if (isScrolling.current) return;

      const direction = e.deltaY > 0 ? 1 : -1;
      let newIndex = indexRef.current + direction;

      if (newIndex < 0 || newIndex >= items.length) return;

      e.preventDefault();
      indexRef.current = newIndex;
      const scrollTo = items[newIndex].offsetTop - 80;
      isScrolling.current = true;

      window.scrollTo({ top: scrollTo, behavior: "smooth" });

      setTimeout(() => {
        isScrolling.current = false;
      }, 800); // control scroll speed
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <div className="demo-service-wrapper" ref={containerRef}>
      <h1 className="demo-service-heading">Our Services</h1>
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
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.6 }
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
