import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './AnimatedText.css';

const headline = "Bring your brand to life with visuals that resonate. Let’s start today!";

const Letter = ({ char, index, visible }) => (
  <motion.span
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
    transition={{ duration: 0.03, delay: index * 0.03 }}
    className="headline-letter"
  >
    {char === ' ' ? '\u00A0' : char}
  </motion.span>
);

const ScrollAnimatedText = () => {
  const [showText, setShowText] = useState(true);
  const [scrollDir, setScrollDir] = useState("down");

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const updateScrollDir = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollDir("down");
        setShowText(true);
      } else {
        setScrollDir("up");
        setShowText(false);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", updateScrollDir);
    return () => window.removeEventListener("scroll", updateScrollDir);
  }, []);

  return (
    <div className="animated-text-container">
      <div className="animated-text">
        {headline.split("").map((char, i) => (
          <Letter key={i} char={char} index={scrollDir === 'down' ? i : headline.length - i} visible={showText} />
        ))}
      </div>
      <button className="collab-button">Let’s Collaborate</button>
    </div>
  );
};

export default ScrollAnimatedText;
