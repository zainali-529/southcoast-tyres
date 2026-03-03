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

  return (<div className="hero-content text-start py-5">
  {/* Small Stock Badge */}
  <p className="text-orange fw-bold mb-2" style={{ color: '#ff6b00', fontSize: '1.1rem' }}>
    Huge Stock of New Tyres Available
  </p>
  
  {/* High-Impact Headline */}
  <h1 className="display-4 fw-bold mb-3" style={{ color: '#1a1a1a', lineHeight: '1.2' }}>
    Stuck With a Flat? <br />
    <span style={{ color: '#002b5c' }}>Mobile Tyre Fitting in Worthing</span>
  </h1>

  {/* Readable Sub-headline */}
  <p className="lead mb-4" style={{ color: '#555', maxWidth: '600px', fontSize: '1.25rem' }}>
    Professional tyre replacement at your home, work, or roadside. <br />
    <strong>30-minute response time. Open 24/7.</strong>
  </p>

  {/* Action Buttons */}
  <div className="cta-btns d-flex flex-wrap gap-3">
    {/* Call Button */}
    <a href="tel:+447533629850" 
       className="btn btn-lg px-4 py-3 fw-bold" 
       style={{ backgroundColor: '#ff6b00', color: '#fff', borderRadius: '8px', border: 'none' }}>
       📞 Call Now
    </a>

    {/* WhatsApp Button */}
    <a href="https://wa.me/447533629850?text=Hello,%20I%20need%20emergency%20mobile%20tyre%20fitting%20in%20Worthing." 
       target="_blank" 
       rel="noopener noreferrer"
       className="btn btn-lg px-4 py-3 fw-bold" 
       style={{ backgroundColor: '#25D366', color: '#fff', borderRadius: '8px', border: 'none' }}>
       💬 WhatsApp
    </a>
  </div>
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
