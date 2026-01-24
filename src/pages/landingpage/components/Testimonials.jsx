import React, { useEffect } from "react";
import Testimonialimg from "../../../assets/testimonial-img.svg";
import Testimonialimg2 from "../../../assets/testimonials-img2.png";
import Testimonialimg3 from "../../../assets/testimonials-img3.png";


import UQuote from "../../../assets/upper-quotes.svg";
import LQuote from "../../../assets/lower-quotes.svg";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

export const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      easing: "ease-in-out", // Easing function for the animation
      once: true, // If true, the animation will only trigger once
    });
  }, []);

  return (
    <>
      <div className="testimonial-container  mt-5" id="testimonials">
      <h1 className="text-center" data-aos="fade-down">
          Testimonials
        </h1>
        <div className="testimonial-cards-container my-5 ">
          <div className="row">
            {/* Card Start */}
            <div className="col-lg-4 col-md-6 col-12 ">
              <div
                className="card-wrapper p-4 my-lg-0 my-3 "
                data-aos="fade-up" // AOS animation
              >
                <div className="card-icon d-flex justify-content-center">
                  <img src={Testimonialimg} alt="" />
                </div>
                <div className="upperquote text-start my-4">
                  <img src={UQuote} alt="" />
                </div>
                <div className="text-container d-flex align-items-center flex-column">
                  <p className="text-center">
                  The tyre quality is outstanding! My car's performance has improved drastically. Highly recommend their services.
                  </p>
                  <h4>Sarah Johnson</h4>
                </div>
                <div className="lowerquote text-end my-4  ">
                  <img src={LQuote} alt="" />
                </div>
              </div>
            </div>
            {/* Card End */}

            {/* Card Start */}
            <div className="col-lg-4 col-md-6 col-12 ">
              <div
                className="card-wrapper p-4 my-lg-0 my-3 "
                data-aos="fade-up" // AOS animation
              >
                <div className="card-icon d-flex justify-content-center">
                  <img src={Testimonialimg2} alt="" />
                </div>
                <div className="upperquote text-start my-4">
                  <img src={UQuote} alt="" />
                </div>
                <div className="text-container d-flex align-items-center flex-column">
                  <p className="text-center">
                  Amazing service and quick delivery. The team was very professional and helped me find the perfect tyres for my car.
                  </p>
                  <h4>James Carter</h4>
                </div>
                <div className="lowerquote text-end my-4  ">
                  <img src={LQuote} alt="" />
                </div>
              </div>
            </div>
            {/* Card End */}

            {/* Card Start */}
            <div className="col-lg-4 col-md-6 col-12 ">
              <div
                className="card-wrapper p-4 my-lg-0 my-3 "
                data-aos="fade-up" // AOS animation
              >
                <div className="card-icon d-flex justify-content-center ">
                <img src={Testimonialimg3} alt="" />
                
                </div>
                <div className="upperquote text-start my-4">
                  <img src={UQuote} alt="" />
                </div>
                <div className="text-container d-flex align-items-center flex-column">
                  <p className="text-center">
                  Affordable and reliable! I had a great experience with their customer support and quality and good products.
                  </p>
                  <h4>Emily Davis</h4>
                </div>
                <div className="lowerquote text-end my-4  ">
                  <img src={LQuote} alt="" />
                </div>
              </div>
            </div>
            {/* Card End */}
          </div>
        </div>
      </div>
    </>
  );
};
