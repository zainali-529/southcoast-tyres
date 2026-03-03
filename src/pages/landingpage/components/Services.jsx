import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { Modal, Button } from "react-bootstrap";
import ServicesCard from "../../../components/ServicesCard";
import service1 from "../../../assets/services-1.svg";
import service2 from "../../../assets/card2.svg";
import service3 from "../../../assets/card3.svg";
import service4 from "../../../assets/card4.svg";
import service5 from "../../../assets/card5.svg";
import service6 from "../../../assets/card6.svg";
import service7 from "../../../assets/card7.svg";
import service8 from "../../../assets/card8.svg";
import modal1 from "../../../assets/modal1.png";
import modal2 from "../../../assets/modal-2-img.png";
import modal3 from "../../../assets/modal-3-img.png";
import modal4 from "../../../assets/modal-4-img.png";
import modal5 from "../../../assets/modal-5-img.png";
import modal6 from "../../../assets/modal-6-img.png";
import modal7 from "../../../assets/modal-7-img.png";
import modal8 from "../../../assets/modal-8-img.png";

const Services = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [showModal5, setShowModal5] = useState(false);
  const [showModal6, setShowModal6] = useState(false);
  const [showModal7, setShowModal7] = useState(false);
  const [showModal8, setShowModal8] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  // Handlers for Modal
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const handleClose2 = () => setShowModal2(false);
  const handleShow2 = () => setShowModal2(true);
  const handleClose3 = () => setShowModal3(false);
  const handleShow3 = () => setShowModal3(true);
  const handleClose4 = () => setShowModal4(false);
  const handleShow4 = () => setShowModal4(true);
  const handleClose5 = () => setShowModal5(false);
  const handleShow5 = () => setShowModal5(true);
  const handleClose6 = () => setShowModal6(false);
  const handleShow6 = () => setShowModal6(true);
  const handleClose7 = () => setShowModal7(false);
  const handleShow7 = () => setShowModal7(true);
  const handleClose8 = () => setShowModal8(false);
  const handleShow8 = () => setShowModal8(true);

  return (
    <div className="services-wrapper py-5 my-5" id="services">
      {/* Section Title */}
      <h1 className="text-center mb-5" data-aos="fade-down">
        Our Services
      </h1>

      {/* Services Cards */}
      <div className="services-cards-wrapper">
        <div className="row">
          <div
            className="col-lg-4 col-sm-6 col-12 my-3"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <ServicesCard
              icon={service1}
              title="Mobile Tyre Assistance"
              description="Experience hassle-free tyre replacement wherever you are. Our expert roadside tyre fitting service brings convenience and safety to your doorstep, ensuring you're back on the road in no time."
              button="More Details"
              onClick={handleShow}
            />
          </div>
          <div
            className="col-lg-4 col-sm-6 col-12 my-3"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <ServicesCard
              icon={service2}
              title="Professional Mobile Puncture Repair"
              description="Get back on the road quickly with our reliable roadside puncture repair service. We ensure your tyre is fixed safely and efficiently, wherever you are."
              button="More Details"
              onClick={handleShow2}
            />
          </div>
          <div
            className="col-lg-4 col-sm-6 col-12 my-3"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <ServicesCard
              icon={service3}
              title="Mobile Tyre Fitting"
              description="Say goodbye to workshop visits with our at-work, workplace or toadside tyre fitting service. Our team comes directly to you, offering convenience without compromising quality."
              button="More Details"
              onClick={handleShow3}
            />
          </div>
          <div
            className="col-lg-4 col-sm-6 col-12 my-3"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <ServicesCard
              icon={service4}
              title="Onsite Tyre Fitting"
              description="Stuck on the road with flat tyre? South Coast mobile tyres can do onsite tyre fitting at a client's home, office, or wherever the vehicle is found."
              button="More Details"
              onClick={handleShow4}
            />
          </div>
          <div
            className="col-lg-4 col-sm-6 col-12 my-3"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <ServicesCard
              icon={service5}
              title="Seasonal Mobile Tyre Change"
              description="Looking for top quality tyres at unbeatable prices? Prepare for changing seasons with our seasonal tyre changeover service. Call us for seasonal mobile tyre fitting!"
              button="More Details"
              onClick={handleShow5}
            />
          </div>
          <div
            className="col-lg-4 col-sm-6 col-12 my-3"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <ServicesCard
              icon={service6}
              title="24 Hr Mobile Tyre Fitting Fleet"
              description="Flat Tyre? This can be a stressful moment for you if you have broken down on road. We offer mobile tyre replacement service in Fleet 7 days a week. Call for urgent mobile tyre fitting!"
              button="More Details"
              onClick={handleShow6}
            />
          </div>
          <div
            className="col-lg-4 col-sm-6 col-12 my-3"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <ServicesCard
              icon={service7}
              title="Tyre Pressure Check and Optimization"
              description="Ensure your tyres are properly inflated for improved safety, performance, and fuel efficiency with our tyre pressure check service."
              button="More Details"
              onClick={handleShow7}
            />
          </div>
          <div
            className="col-lg-4 col-sm-6 col-12 my-3"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <ServicesCard
              icon={service8}
              title="Alloy Wheel Repair"
              description="Restore your alloy wheels to their original condition with our expert repair service, ensuring your vehicle looks and performs its best."
              button="More Details"
              onClick={handleShow8}
            />
          </div>
        </div>
      </div>

      {/* Modal 1 */}

      <Modal show={showModal} onHide={handleClose} size="xl" centered>
        <Modal.Header closeButton>
          <Modal.Title>Mobile Tyre Assistance</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-xl-flex justify-content-between">
            <img
              src={modal1}
              alt="Mobile Tyre Assistance"
              className="img-fluid mb-3 me-3"
            />
            <div>
              <section className="mb-5">
                <h2 className="fs-4 text-bold mb-2">Effortless Tyre Changes</h2>
                <p>
                  Our roadside tyre fitting service allows you to enjoy peace of
                  mind knowing that you don’t need to wait at a workshop.
                  Whether at home or work, our skilled team will handle the tyre
                  replacement with efficiency and professionalism, leaving you
                  free to focus on your day.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="fs-4 text-bold mb-2">On-the-Spot Safety</h2>
                <p>
                  Stranded on the roadside due to a flat tyre? Our team ensures
                  a swift and secure tyre fitting service on-site, minimizing
                  your time spent in vulnerable situations. With high-quality
                  tools and expertise, we guarantee a safe return to your
                  journey.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="fs-4 text-bold mb-2">
                  Adaptable Service Locations
                </h2>
                <p>
                  Whether you’re at home, the office, or on the move, our mobile
                  service adapts to your needs. We bring the equipment and
                  expertise to your location, saving you the effort of driving
                  to a fitting center.
                </p>
              </section>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal 2 */}
      <Modal show={showModal2} onHide={handleClose2} size="xl" centered>
        <Modal.Header closeButton>
          <Modal.Title>Professional Puncture Repair</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-xl-flex justify-content-between ">
            <img
              src={modal2}
              alt="Professional Puncture Repair"
              className="img-fluid mb-3 me-3"
            />
            <div>
              <section className="mb-5">
                <h2 className="fs-4 text-bold mb-2">On-Site Repair Services</h2>
                <p>
                  When you experience a puncture, our team provides fast and
                  efficient repair services directly at your location. We ensure
                  your tyre is restored to optimal condition, saving you the
                  trouble of traveling to a workshop.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="fs-4 text-bold mb-2">
                  Round-the-Clock Assistance
                </h2>
                <p>
                  Tyre issues can occur at any time, which is why we offer 24/7
                  puncture repair services. No matter where you are or the time
                  of day, our skilled technicians are ready to help you get back
                  on the road quickly and safely.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="fs-4 text-bold mb-2">
                  Reliable and Durable Repairs
                </h2>
                <p>
                  Our expert repair process ensures a durable and safe solution
                  for your punctured tyre. With high-quality materials and
                  advanced techniques, we guarantee long-lasting results that
                  prioritize your safety and convenience.
                </p>
              </section>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showModal3} onHide={handleClose3} size="xl" centered>
        <Modal.Header closeButton>
          <Modal.Title>Workplace Tyre Fitting</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-xl-flex justify-content-between ">
            <img
              src={modal3}
              alt="Workplace Tyre Fitting"
              className="img-fluid mb-3 me-3"
            />
            <div>
              <section className="mb-5">
                <h2 className="fs-4 text-bold mb-2">
                  Convenient and Efficient Service
                </h2>
                <p>
                  Our mobile tyre fitters bring professional-grade services
                  directly to your workplace. Save time and effort without
                  sacrificing the quality of your tyre fitting experience.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="fs-4 text-bold mb-2">Trusted Expertise</h2>
                <p>
                  All our technicians are highly trained and equipped to handle
                  tyre replacements with precision. Rest assured knowing that
                  your vehicle is in safe and capable hands.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="fs-4 text-bold mb-2">
                  Comprehensive Fitting Process
                </h2>
                <p>
                  From fitting and balancing to rubber valve installation and
                  disposal of old tyres, our service includes everything you’d
                  expect from a garage—delivered directly to you.
                </p>
              </section>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose3}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal 4 */}
      <Modal show={showModal4} onHide={handleClose4} size="xl" centered>
        <Modal.Header closeButton>
          <Modal.Title>Emergency Breakdown Support</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-xl-flex justify-content-between ">
            <img
              src={modal4}
              alt="Emergency Breakdown Support"
              className="img-fluid mb-3 me-3"
            />
            <div>
              <section className="mb-5">
                <h2 className="fs-4 text-bold mb-2">Rapid Response</h2>
                <p>
                  Our team is ready to assist you during a breakdown, offering
                  prompt and reliable support to minimize your inconvenience and
                  ensure your safety.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="fs-4 text-bold mb-2">Comprehensive Solutions</h2>
                <p>
                  From jump-starting a dead battery to tire replacements and
                  towing services, we provide a full range of roadside
                  assistance options to address your needs.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="fs-4 text-bold mb-2">Available 24/7</h2>
                <p>
                  No matter the time or location, our emergency breakdown
                  support service is available around the clock to offer you
                  peace of mind.
                </p>
              </section>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose4}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal 5 */}

      <Modal show={showModal5} onHide={handleClose5} size="xl" centered>
        <Modal.Header closeButton>
          <Modal.Title>Seasonal Tyre Changeover</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-xl-flex justify-content-between ">
            <img
              src={modal5}
              alt="Seasonal Tyre Changeover"
              className="img-fluid mb-3 me-3"
            />
            <div>
              <section className="mb-5">
                <h2 className="fs-4 text-bold mb-2">Safety First</h2>
                <p>
                  Switch to appropriate tyres for the season to enhance your
                  safety on the road. Our experts ensure precise and efficient
                  tyre changes tailored to your vehicle’s requirements.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="fs-4 text-bold mb-2">Improved Performance</h2>
                <p>
                  Enjoy improved handling and fuel efficiency by using the right
                  tyres for different weather conditions. Our service maximizes
                  your vehicle’s performance year-round.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="fs-4 text-bold mb-2">Convenient Scheduling</h2>
                <p>
                  We work around your schedule to provide hassle-free tyre
                  changeovers, ensuring your vehicle is ready for the road when
                  you need it most.
                </p>
              </section>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose5}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal 6 */}
      <Modal show={showModal6} onHide={handleClose6} size="xl" centered>
        <Modal.Header closeButton>
          <Modal.Title>Fleet Tyre Management</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-xl-flex justify-content-between ">
            <img
              src={modal6}
              alt="Fleet Tyre Management"
              className="img-fluid mb-3 me-3"
            />
            <div>
              <section className="mb-5">
                <h2 className="fs-4 text-bold mb-2">Streamlined Maintenance</h2>
                <p>
                  Our tyre management service helps you keep your fleet in peak
                  condition, reducing downtime and ensuring optimal vehicle
                  performance.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="fs-4 text-bold mb-2">
                  Cost-Effective Solutions
                </h2>
                <p>
                  Save money with our efficient tyre solutions, tailored to your
                  fleet’s unique needs. We help you minimize costs without
                  compromising on quality.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="fs-4 text-bold mb-2">Expert Support</h2>
                <p>
                  Our experienced team provides guidance and support to ensure
                  your fleet operates at its best. From regular inspections to
                  emergency replacements, we’ve got you covered.
                </p>
              </section>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose6}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal 7 */}
      <Modal show={showModal7} onHide={handleClose7} size="xl" centered>
        <Modal.Header closeButton>
          <Modal.Title>Tyre Pressure Check and Optimization</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-xl-flex justify-content-between ">
            <img
              src={modal7}
              alt="Tyre Pressure Check and Optimization"
              className="img-fluid mb-3 me-3"
            />
            <div>
              <section className="mb-5">
                <h2 className="fs-4 text-bold mb-2">Enhanced Safety</h2>
                <p>
                  Properly inflated tyres reduce the risk of accidents and
                  improve your vehicle’s handling. Our service ensures optimal
                  tyre pressure for a safer drive.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="fs-4 text-bold mb-2">
                  Improved Fuel Efficiency
                </h2>
                <p>
                  Save money on fuel by maintaining the correct tyre pressure.
                  Underinflated tyres can decrease your vehicle’s efficiency,
                  costing you more over time.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="fs-4 text-bold mb-2">
                  Longevity for Your Tyres
                </h2>
                <p>
                  Extend the life of your tyres by keeping them properly
                  inflated. Our service helps prevent uneven wear and tear,
                  saving you money on replacements.
                </p>
              </section>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose7}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal 8 */}
      <Modal show={showModal8} onHide={handleClose8} size="xl" centered>
        <Modal.Header closeButton>
          <Modal.Title>Alloy Wheel Repair</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-xl-flex justify-content-between ">
            <img
              src={modal8}
              alt="Alloy Wheel Repair"
              className="img-fluid mb-3 me-3"
            />
            <div>
              <section className="mb-5">
                <h2 className="fs-4 text-bold mb-2">Restoration Excellence</h2>
                <p>
                  Our alloy wheel repair service restores your wheels to their
                  original condition, removing scratches, dents, and scuffs to
                  enhance your vehicle’s appearance.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="fs-4 text-bold mb-2">Enhanced Performance</h2>
                <p>
                  Damaged alloy wheels can affect your vehicle’s performance.
                  Our expert repairs ensure that your wheels maintain their
                  structural integrity and optimal performance.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="fs-4 text-bold mb-2">
                  Cost-Effective Solutions
                </h2>
                <p>
                  Save money by repairing your alloy wheels instead of replacing
                  them. Our cost-effective service delivers outstanding results
                  at a fraction of the cost of new wheels.
                </p>
              </section>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose8}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Services;
