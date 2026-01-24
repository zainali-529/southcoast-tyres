import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import heroImg from '../../../assets/hero-image.svg';

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
  }, []);

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className='hero-container' id="home">
      <div className="hero-wrapper d-flex align-items-center justify-content-between mx-auto">
        <div className="hero-text" data-aos="fade-up">
          <p>YOUR JOURNEY</p>
          <h1>
            Begins with the Right <span>Tires</span>
          </h1>
          <h3>24/7 South coast Mobile tyres</h3>
          <div className="cta-btns my-4">
            <button
              className="btn explore-btn"
              data-aos="zoom-in"
              onClick={() => handleScrollToSection('services')}
            >
              Explore
            </button>
            <button
              className="btn btn-outline contact-btn"
              data-aos="zoom-in"
              onClick={() => handleScrollToSection('contact')}
            >
              Contact Us
            </button>
          </div>
        </div>
        <div className="hero-image" data-aos="fade-left">
          <img src={heroImg} alt="Hero" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
