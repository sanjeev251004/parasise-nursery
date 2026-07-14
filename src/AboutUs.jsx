import React from 'react';
import './AboutUs.css'; // If you have a separate CSS file for styling

function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h1>About Paradise Nursery</h1>
        <p className="tagline">Where Greenery Meets Peace</p>
        
        <p className="description">
          Welcome to Paradise Nursery, your premier destination for high-quality, 
          beautifully nurtured plants. We believe that incorporating plants into your 
          living space not only enhances your environment but also brings a sense of 
          tranquility and peace to your everyday life.
        </p>
        
        <p className="description">
          Our team of dedicated plant lovers carefully curates and cares for every specimen, 
          ensuring you receive healthy, thriving plants that will flourish in your home 
          or garden. From air-purifying indoor varieties to stunning outdoor blooms, 
          we have something for everyone.
        </p>

        <div className="our-mission">
          <h2>Our Mission</h2>
          <p>
            To spread the joy of gardening, make homes greener, and foster a deeper 
            connection between people and nature.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
