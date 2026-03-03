import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const formRef = useRef();
  const position = [50.8179, -0.3752];

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceID = "service_r4q6ew3";
    const templateID = "template_35t54kc";
    const userID = "QoWZREm65NOVeDZhD";

    emailjs
      .sendForm(serviceID, templateID, formRef.current, userID)
      .then(
        (result) => {
          console.log("Email sent successfully!", result.text);
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.log("Email send failed:", error.text);
          alert("Message failed to send. Please try again later.");
        }
      );
  };

  return (
    <div className="contact-wrapper">
      <MapContainer
        center={position}
        zoom={13}
        style={{ width: "100%", height: "500px" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            Worthing, BN11 <br /> You can add your business details here.
          </Popup>
        </Marker>
      </MapContainer>
      <div className="contact-container my-5" id="contact">
        <div className="heading text-center">
          <p className="m-0">Get in touch with us</p>
        </div>
        <div className="row my-5">
          <div className="col-md-6">
            <div className="links-wrapper">
              <div className="location-icon-wrapper d-flex">
                <div className="img me-3">
                  <div className="circle d-flex justify-content-center align-items-center">
                    <FaMapMarkerAlt size={30} color="#00274d" />
                  </div>
                </div>
                <div className="text-wrapper d-flex flex-column justify-content-center">
                  <p>Visit us</p>
                  <h5 className="w-75">Worthing Post code in (BN11)</h5>
                </div>
              </div>
              <div className="contact-icon-wrapper my-4 d-flex">
                <div className="img me-3">
                  <div className="circle d-flex justify-content-center align-items-center">
                    <FaPhoneAlt size={30} color="#00274d" />
                  </div>
                </div>
                <div className="text-wrapper d-flex flex-column justify-content-center">
                  <p>Call us</p>
                  <h5>tel:07533629850</h5>
                </div>
              </div>
              <div className="email-icon-wrapper d-flex">
                <div className="img me-3">
                  <div className="circle d-flex justify-content-center align-items-center">
                    <FaEnvelope size={30} color="#00274d" />
                  </div>
                </div>
                <div className="text-wrapper d-flex flex-column justify-content-center">
                  <p>Email us</p>
                  <h5 className="w-75">Scmt-inquiry@hotmail.com</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <form ref={formRef} onSubmit={sendEmail}>
              <div className="details-wrapper mt-md-0 mt-5">
                <div className="name-wrapper d-flex justify-content-between">
                  <div className="first-name">
                    <p>First Name</p>
                    <input
                      type="text"
                      name="first_name"
                      className="w-100 p-2"
                      required
                    />
                  </div>
                  <div className="last-name">
                    <p>Last Name</p>
                    <input
                      type="text"
                      name="last_name"
                      className="w-100 p-2"
                      required
                    />
                  </div>
                </div>
                <div className="email my-3">
                  <p>Email</p>
                  <input
                    type="email"
                    name="email"
                    className="w-100 p-2"
                    required
                  />
                </div>
                <div className="msg-area">
                  <p>Message</p>
                  <textarea
                    name="message"
                    className="w-100 p-2"
                    required
                  ></textarea>
                </div>
                <div className="submit-button mt-3">
                  <button type="submit" className="px-sm-5 px-4 py-1">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
