import React from 'react';
import OurServiceSection from '../HomePage/OurServiceSection';
// import OurService from '../OurServicePage/ServiceText';
import ExperienceSection from '../HomePage/ExperienceSection';
import ProcessSteps from '../HomePage/ProcessSteps';
import BrandLogosSection from './BrandLogosSection';
import ContactForm from './ContactForm';
import TestimonialSlider from './TestimonialSlider';
 
 
function Process() {

  return (
    <div>
      <OurServiceSection />
      {/* <OurService /> */}
      <ProcessSteps />
      <ExperienceSection />
      <BrandLogosSection />
      <ContactForm />
      <TestimonialSlider />
    </div>
  );
}

export default Process ;