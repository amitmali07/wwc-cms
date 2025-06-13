import React from 'react';
import BrandingCaseStudy from './BrandingCaseStudy';
import NutPackagingShowcase from './NutPackagingShowcase';
import ConclusionSection from './ConclusionSection';
import PortfolioSlider from './PortfolioSlider';
// import ToolsSection from '../OurServicePage/ToolsSection';
import CallToAction from '../HomePage/CallToAction';
// import ServiceText from './ServiceText'

function WorkDetails() {

  return (
    <div>
     {/* <ServiceText /> */}
     <BrandingCaseStudy />
     <NutPackagingShowcase />
     <ConclusionSection />
     <PortfolioSlider />
     {/* <ToolsSection /> */}
     <CallToAction />
    </div>
  );
}

export default WorkDetails ;