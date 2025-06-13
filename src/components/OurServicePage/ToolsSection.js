import React from 'react';
import './ToolsSection.css';

import photoshop from '../../assets/icons/Photoshop.png';
import illustrator from '../../assets/icons/Illustrator.png';
import figma from '../../assets/icons/Figma.png';
import afterEffects from '../../assets/icons/After effects.png';  

const iconMap = {
  photoshop,
  illustrator,
  figma,
  'after-effects': afterEffects,
};

const icons = [
  ['after-effects', 'illustrator', 'photoshop', 'illustrator', 'figma', 'after-effects', 'illustrator', 'photoshop'],
  ['after-effects', 'illustrator', 'photoshop', 'illustrator', 'figma', 'after-effects', 'illustrator', 'photoshop'],
];

const ToolsSection = () => {
  return (
    <div className="tools-section">
      <p className="tools-description">
        Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
        ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
        per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
      </p>
      <hr className="tools-divider" />
      <div className="icons-grid">
        {icons.map((row, rowIndex) => (
          <div className="icon-row" key={rowIndex}>
            {row.map((iconKey, index) => (
              <img
                key={index}
                src={iconMap[iconKey]}
                alt={iconKey}
                className="tool-icon"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsSection;
