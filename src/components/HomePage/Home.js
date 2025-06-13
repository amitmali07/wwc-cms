import React from 'react';
import Banner from './Banner';
import AnimatedText from './AnimatedText';
import OurServiceSection from './OurServiceSection';
import ServiceList from './ServiceList';
import StarProject from './StarProject';
import OurProcess from './OurProcess';
import ProcessSteps from './ProcessSteps';
import SelectedWorks from './SelectedWorks';
import ExperienceSection from './ExperienceSection';
import FoodBrandSection from './FoodBrandSection';
import CallToAction from './CallToAction';
 

function Home() {

  return (
    <div>
      <Banner/>
      <AnimatedText />
      <OurServiceSection />
      <ServiceList />
      <StarProject />
      <OurProcess />
      <ProcessSteps />
      <SelectedWorks />
      <ExperienceSection />
      <FoodBrandSection />
      <CallToAction />
    </div>
  );
}

export default Home;