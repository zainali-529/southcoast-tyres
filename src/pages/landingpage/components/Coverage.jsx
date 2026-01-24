import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import img from "../../../assets/coverage-image.png";

const Coverage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className="coverage-wrapper">
      <div
        className="d-flex justify-content-between flex-md-row flex-column align-items-center mx-auto"
        style={{ maxWidth: "1440px", width: "87%" }}
      >
        {/* Text Section */}
        <div
          className="coverage-text"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <h1>Which areas are within our coverage?</h1>
          <ul>
            <li>Brighton</li>
            <li>Crowley</li>
            <li>Chichester</li>
            <li>Portsmouth</li>
          </ul>
        </div>

        {/* Image Section */}
        <div
          className="coverage-img"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <img src={img} alt="Coverage Map" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Coverage;
