import React, { useState } from 'react';
import './TestimonialSlider.css';
import userImage from '../../assets/user.png'; // replace with your image

const testimonials = [
  {
    name: 'Vorem ipsum',
    message: `At White Warbler Communications, we offer a comprehensive range of creative and strategic services to help businesses establish a strong and`,
    image: userImage,
  },
  {
    name: 'Vorem ipsum',
    message: `At White Warbler Communications, we offer a comprehensive range of creative and strategic services to help businesses establish a strong and`,
    image: userImage,
  },
  {
    name: 'Vorem ipsum',
    message: `At White Warbler Communications, we offer a comprehensive range of creative and strategic services to help businesses establish a strong and`,
    image: userImage,
  },
];

const TestimonialSlider = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsPerPage = 2;
  const pageCount = Math.ceil(testimonials.length / testimonialsPerPage);

  const startIndex = currentPage * testimonialsPerPage;
  const currentTestimonials = testimonials.slice(startIndex, startIndex + testimonialsPerPage);

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, pageCount - 1));
  };

  return (
    <div className="testimonial-section">
      <div className="testimonial-wrapper">
        {currentTestimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <div className="quote">“</div>
            <div className="testimonial-header">
              <img src={testimonial.image} alt={testimonial.name} />
              <div className="testimonial-name">
                <span className="bar" />
                <h3>{testimonial.name}</h3>
              </div>
            </div>
            <p>{testimonial.message}</p>
          </div>
        ))}
      </div>

      <hr className="divider" />

      <div className="testimonial-nav">
        <button onClick={handlePrev}>❮ Previous</button>
        <div className="dots">
          {Array.from({ length: pageCount }).map((_, i) => (
            <span
              key={i}
              className={`dot ${i === currentPage ? 'active' : ''}`}
              onClick={() => setCurrentPage(i)}
            />
          ))}
        </div>
        <button onClick={handleNext}>Next ❯</button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
