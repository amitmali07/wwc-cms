import React, { useRef, useEffect, useCallback } from 'react';
import './SelectedWorks.css';
import { ArrowUpRight } from 'lucide-react';
import img1 from '../../assets/work1.png';
import img2 from '../../assets/work2.png';
import img3 from '../../assets/work3.png';

const works = [
  { id: 1, image: img1 },
  { id: 2, image: img2 },
  { id: 3, image: img3 },
  { id: 4, image: img1 },
  { id: 5, image: img2 },
  { id: 6, image: img3 },
  { id: 7, image: img3 },
  { id: 8, image: img1 },
  { id: 9, image: img2 },
  { id: 10, image: img3 },
];

export default function SelectedWorks() {
  const containerRef = useRef();
  const isScrolling = useRef(false);
  const scrollDirection = useRef('down');

  const handleWheel = useCallback((e) => {
    const container = containerRef.current;
    if (!container) return;

    e.preventDefault();

    if (!isScrolling.current) {
      isScrolling.current = true;
      const delta = e.deltaY;
      const isAtStart = container.scrollLeft <= 0;
      const isAtEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 1;

      const scrollSpeed = container.clientWidth; // Increase speed by using full width

      if (delta > 0 && !isAtEnd) {
        container.scrollBy({ left: scrollSpeed, behavior: 'smooth' });
        scrollDirection.current = 'down';
      } else if (delta < 0 && !isAtStart) {
        container.scrollBy({ left: -scrollSpeed, behavior: 'smooth' });
        scrollDirection.current = 'up';
      } else if (delta > 0 && isAtEnd) {
        window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
      } else if (delta < 0 && isAtStart) {
        window.scrollBy({ top: -window.innerHeight, behavior: 'smooth' });
      }

      setTimeout(() => {
        isScrolling.current = false;
      }, 400);
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, [handleWheel]);

  return (
    <section className="selected-works-section">
      <h2 className="section-title">| Selected Works</h2>
      <div className="scroll-container" ref={containerRef}>
        {works.map((w, index) => (
          <div key={w.id} className="work-card" style={{ animationDelay: `${index * 0.1}s` }}>
            <img src={w.image} alt={`Work ${w.id}`} />
            <div className="btn-wrapper">
              <button className="work-btn">Show More</button>
              <ArrowUpRight size={20} className="btn-icon" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
