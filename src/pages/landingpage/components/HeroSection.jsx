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
          <p>Huge Stock of New Tyres</p>
          <h1>
            Stuck With a Flat? Mobile Tyre Fitting in Worthing & Nearby – We Come To You!
            <span>Professional tyre replacement at your home, work, or roadside. 30 minute response time. Open 24/7.</span>
          </h1>
          <h3>24/7 South Coast Mobile Tyres</h3>
          <div className="cta-btns my-4">
  {/* Call Button - Replaces "Explore" */}
  <a href="tel:+447533629850" 
     className="btn explore-btn" 
     data-aos="zoom-in"
     style={{ textDecoration: 'none', display: 'inline-block' }}>
     📞 Call Now
  </a>

  {/* WhatsApp Button - Replaces "Contact Us" */}
  <a href="https://wa.me/447533629850?text=I%20need%20a%20mobile%20tyre%20fitting" 
     className="btn btn-outline contact-btn" 
     data-aos="zoom-in"
     target="_blank" 
     rel="noopener noreferrer"
     style={{ textDecoration: 'none', display: 'inline-block' }}>
     💬 WhatsApp Us
  </a>
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
