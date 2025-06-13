 import React from "react";
import "./NutPackagingShowcase.css";
import topImage from "../../assets/topImage.png";
import bottomLeft from "../../assets/bottomLeft.png";
import bottomRight from "../../assets/bottomRight.png";

const NutPackagingShowcase = () => {
  return (
    <div className="nut-packaging-container">
      <div className="top-section">
        <img src={topImage} alt="Top Product" />
      </div>

      <div className="bottom-section">
        <div className="bottom-image">
          <img src={bottomLeft} alt="Bottom Left Products" />
        </div>
        <div className="bottom-image">
          <img src={bottomRight} alt="Bottom Right Products" />
        </div>
      </div>
    </div>
  );
};

export default NutPackagingShowcase;
