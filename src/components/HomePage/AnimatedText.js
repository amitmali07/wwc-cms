import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './AnimatedText.css';

const headline = "Bring your brand to life with visuals that resonate. Let’s start today!";

const ScrollAnimatedText = () => {
  const [highlightedCount, setHighlightedCount] = useState(0);
  const [scrollPos, setScrollPos] = useState(0);

 useEffect(() => {
  const handleScroll = () => {
    const currentY = window.scrollY;
    const delta = currentY - scrollPos;

    if (delta > 0 && highlightedCount < headline.length) {
      setHighlightedCount(prev => Math.min(prev + 10, headline.length)); // speed ↑
    } else if (delta < 0 && highlightedCount > 0) {
      setHighlightedCount(prev => Math.max(prev - 10, 0)); // speed ↑
    }

    setScrollPos(currentY);
  };

  window.addEventListener('wheel', handleScroll);
  return () => window.removeEventListener('wheel', handleScroll);
}, [scrollPos, highlightedCount]);


  return (
    <div className="animated-text-container">
      <div className="sticky-wrapper">
        <div className="animated-text">
          {headline.split('').map((char, i) => (
            <motion.span
              key={i}
              className={`headline-letter ${i < highlightedCount ? 'dark' : 'faint'}`}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </div>
        <button className="collab-button">Let’s Collaborate</button>
      </div>
    </div>
  );
};

export default ScrollAnimatedText;
