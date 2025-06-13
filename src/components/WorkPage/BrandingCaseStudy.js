// BrandingSection.jsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

import "./BrandingCaseStudy.css";
import service1 from "../../assets/project/urban-monk/THUMBNAIL.png";
import service2 from "../../assets/project/urban-monk/URBAN MONK RENDER 02.png";
import service3 from "../../assets/project/urban-monk/URBAN MONK RENDER 03.png";

const BrandingSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

// const rawWidth = useTransform(scrollYProgress, [0, 1], ["50%", "10%"]);
// const leftWidth = useSpring(rawWidth, {
//   type: "tween",
//   duration: 100,
//   ease: "easeInOut"
// });

  const leftWidth = useTransform(scrollYProgress, [0, 1], ["50%", "10%"]);  
  const rightWidth = useTransform(scrollYProgress, [0, 1], ["50%", "100%"]);  
  const leftOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const headingOpacity = useTransform(scrollYProgress, [0.5, 1], [0, 1]);
  const backgroundColor = useTransform(scrollYProgress, [0, 1], ["#111", "#f7f7f7"]);

  return (
    <motion.section className="branding-scroll-wrapper">
      <motion.div
        className="branding-container"
        ref={containerRef}
        // transition={{ duration: 1 }}
        style={{ backgroundColor }}
      >
        <motion.div className="branding-left sk-class"  
        style={{ width: leftWidth }} 
        transition={{
        duration: 1.2,
        ease: "easeInOut"
      }}>
          <motion.div
            className="left-content-service"
            style={{ opacity: leftOpacity }}
            transition={{ duration: 1 }}
          >
            <h2 className="heading">
              Urban<span> Monk</span>
            </h2>
            <p className="desc">
              Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>

            <motion.div className="buttons">
              {["Immersive Brand Experience", "Emotive Branding", "Brand Architecture", "Interactive Touchpoints", "Brand Audit Services"].map((btn, i) => (
                <motion.button key={i}>{btn}</motion.button>
              ))}
            </motion.div>

            <div className="tools">
              <span className="tool ps">Ps</span>
              <span className="tool ae">Ae</span>
              <span className="tool ai">Ai</span>
            </div>

            <motion.div className="section-workdetails">
              <h3>Challenge</h3>
              <span className="service-line">|</span>
              <p>Corem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            </motion.div>

            <motion.div className="section-workdetails">
              <h3>What we did</h3>
              <span className="service-line">|</span>
              <p>Corem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            </motion.div>
          </motion.div>

          <motion.div
            className="vertical-heading"
            style={{ opacity: headingOpacity }}
          >
            <h2>Urban Monk</h2>
          </motion.div>
        </motion.div>

        <motion.div className="branding-right scroll-area hide-scrollbar" style={{ width: rightWidth }}>
          <div className="branding-scroll-content">
            <motion.div className="top-image">
              <img src={service1} alt="Logo Explanation" />
            </motion.div>

            <motion.div className="bottom-images">
              <img src={service2} alt="Peanuts" />
              <img src={service3} alt="Nut packs" />
            </motion.div>

            <motion.div className="bottom-images">
              <img src={service2} alt="Peanuts" />
              <img src={service3} alt="Nut packs" />
            </motion.div>

            <div className="branding-scroll-end-spacer"></div>
          </div>
        </motion.div>
      </motion.div>

      {/* Spacer section to enable scroll for animation */}
      <div className="branding-spacer"></div>
    </motion.section>
  );
};

export default BrandingSection;
