import React from 'react';
import './ContactBanner.css';

const ContactBanner = () => {
  return (
    <section className="contact-banner">
      <div className="contact-banner-inner">
        <h1>Let’s Get in Touch</h1>
        <p>We’d love to hear about your project or idea.</p>
        {/* You can add form or image here */}
      </div>
    </section>
  );
};

export default ContactBanner;
