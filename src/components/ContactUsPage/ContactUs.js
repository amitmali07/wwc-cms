import React from 'react';
import ContactBanner from './ContactBanner';
import EnquiryTabs from './EnquiryTabs';
import ContactSection from './ContactSection';
 
function ContactUs() {

  return (
    <div>
    <ContactBanner/>
    <EnquiryTabs/>
    <ContactSection />
    </div>
  );
}

export default ContactUs;