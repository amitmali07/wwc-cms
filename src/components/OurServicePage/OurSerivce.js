import React from 'react';
import ServiceText from './ServiceText';
import ServiceSection from './ServicesSection';
import ToolsSection from './ToolsSection';
import CallToAction from '../HomePage/CallToAction';
// import Services from './ServiceCard';


function OurService() {

  return (
    <div>
     <ServiceText />
     {/* <Services /> */}
     <ServiceSection />
     <ToolsSection/>
     <CallToAction />
     
    </div>
  );
}

export default OurService ;