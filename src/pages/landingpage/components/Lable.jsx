import React, { useEffect } from 'react';
import { FaCloudDownloadAlt, FaSmile, FaUsers } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const StatsLabel = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <div className="d-none d-lg-block">
      <div
        className="stats-label d-flex justify-content-around align-items-center"
        data-aos="fade-up"
      >
        <div className="stat-item" data-aos="zoom-in" data-aos-delay="100">
          <FaCloudDownloadAlt className="icon" />
          <div>
            <strong>Over 10,000</strong>
            <p>Tyres Installed</p>
          </div>
        </div>
        <div className="divider" />
        <div className="stat-item" data-aos="zoom-in" data-aos-delay="300">
          <FaSmile className="icon" />
          <div>
            <strong>98% Customer</strong>
            <p>Satisfaction</p>
          </div>
        </div>
        <div className="divider" />
        <div className="stat-item" data-aos="zoom-in" data-aos-delay="500">
          <FaUsers className="icon" />
          <div>
            <strong>24/7</strong>
            <p>Emergency Services</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsLabel;
