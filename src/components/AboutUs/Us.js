import React from 'react';
import ScrollSections from './ScrollSections';
import CallToAction from '../HomePage/CallToAction';
import ExperienceSection from '../HomePage/ExperienceSection';
import ConclusionSection from '../WorkPage/ConclusionSection';
import LeadersSection from './LeadersSection';
 
function Us() {

  return (
    <div>
   <ScrollSections />
   <ConclusionSection />
   <ExperienceSection />
   <LeadersSection />
   <CallToAction />
    </div>
  );
}

export default Us ;