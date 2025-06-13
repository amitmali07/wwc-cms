import React from "react";
import "./BrandLogosSection.css";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo1.png";
import logo3 from "../../assets/logo1.png";
// Import other logos...

const BrandGridSection = () => {
  // Replace these with your actual logos
  const firstRow = [logo1, logo2, logo3, logo1, logo2];
  const secondRow = [logo3, logo1, logo2, logo3, logo1, logo2];

  return (
    <div className="brand-grid-section">
      <p className="description-brandlogo">
        Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra. Curabitur tempus urna at
        turpis condimentum lobortis.
      </p>
      <div className="grid-wrapper">
        <div className="row">
          {firstRow.map((logo, index) => (
            <img src={logo} alt={`logo-${index}`} key={index} />
          ))}
        </div>
        <div className="row">
          {secondRow.map((logo, index) => (
            <img src={logo} alt={`logo-${index + 5}`} key={index + 5} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandGridSection;
