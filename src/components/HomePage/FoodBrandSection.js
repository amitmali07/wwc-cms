import React from 'react';
import './FoodBrandSection.css';
import brandImage from '../../assets/brand-packaging.png'; // replace with your actual image

const FoodBrandSection = () => {
  return (
    <section className="food-brand-section">
      <div className="content-left">
        <h2 className="headline">First Impressions Don’t Get a Second Chance.</h2>
        <div className="description-foodbrand">
          <p>
            At White Warbler Communications, a leading creative packaging design agency in Pune, we create FMCG packaging that builds memory, 
            not just visibility. From custom product packaging design to complete packaging for FMCG brands, every label, layout, 
            and fold is crafted to rise above cluttered shelves and click-happy carts. Whether it's a nostalgic namkeen or a next-gen superfood, 
            our packaging design solutions blend culture, clarity, and commerce, turning everyday products into shelf-smart, emotionally sticky brands.
            Because good packaging doesn’t just sell. It speaks. And it stays.
          </p>
        </div>
      </div>
      <div className="content-right">
        <img src={brandImage} alt="Packaging Designs" className="brand-image" />
        <p className="tagline">"We Create Packaging That Pops."</p>
      </div>
    </section>
  );
};

export default FoodBrandSection;
