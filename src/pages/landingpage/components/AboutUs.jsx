import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import aboutImg from '../../../assets/about-img.svg';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
  }, []);

  const handleScrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div>
      <div className="about-container" id="about">
        <div className="about-wrapper d-flex align-items-center justify-content-between">
          <div className="about-image" data-aos="fade-right">
            <img src={aboutImg} alt="About Us" />
          </div>
          <div className="text-container ms-md-4" data-aos="fade-left">
            <h2>About Us</h2>
            <h1 className="mb-3">Dedicated to Keeping You Safe on the Road</h1>
            <p>
              At 24/7 South Coast Mobile Tyre, we specialize in providing top-notch tire services to ensure your safety and comfort on the road. With years of experience, our team is committed to offering reliable and efficient solutions for all your tire needs.
            </p>
            <button className="btn" data-aos="zoom-in" onClick={handleScrollToServices}>
              Visit Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
