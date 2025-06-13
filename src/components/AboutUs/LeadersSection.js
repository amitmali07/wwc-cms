import React from "react";
import "./LeadersSection.css";
import chetan from "../../assets/chetan.png";
import vikrant from "../../assets/vikrant.png";

const LeadersSection = () => {
  return (
    <div className="leaders-section">
      <div className="leader-card">
        <img src={chetan} alt="Mr. Chetan Chitrakut" />
        <p className="title1">The Cool Leader of WWC</p>
        <div className="underline" />
        <h3>MR. Chetan Chitrakut</h3>
      </div>

      <div className="leader-card">
        <img src={vikrant} alt="Mr. Vikrant Paithankar" />
        <p className="title1">The Cool Leader of WWC</p>
        <div className="underline" />
        <h3>MR. Vikrant Paithankar</h3>
      </div>
    </div>
  );
};

export default LeadersSection;
