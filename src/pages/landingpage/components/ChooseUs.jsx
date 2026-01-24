import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { FaTools, FaTruck, FaCertificate } from "react-icons/fa";
import Card from "../../../components/Card";

const ChooseUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className="chooseus-container" id="choose">
      <div className="chooseus-wrapper">
        <h1 className="text-center" data-aos="fade-up">
          Why Choose Us
        </h1>
        <div className="row gx-4 gy-4">
          <div
            className="col-12 col-md-6 col-lg-4"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <Card
              icon={<FaTools size={30} />}
              title="Swift Emergency Support"
              description="Stranded? Our 24/7 emergency tyre support ensures you're back on the road without delay. Trust our rapid response for all your urgent tyre needs."
            />
          </div>
          <div
            className="col-12 col-md-6 col-lg-4"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <Card
              icon={<FaTruck size={30} />}
              title="Convenient Doorstep Service"
              description="Experience the ultimate convenience with our mobile tyre service. We come to your location, saving you time and hassle, no matter where you are."
            />
          </div>
          <div
            className="col-12 col-md-6 col-lg-4"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <Card
              icon={<FaCertificate size={30} />}
              title="Unmatched Expertise"
              description="Our certified tyre specialists ensure top-tier service, using the latest tools and techniques to keep your vehicle safe and roadworthy."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;