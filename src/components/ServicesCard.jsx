import React from "react";

const ServicesCard = ({ icon, title, description, button  , onClick}) => {
  return (
    <div className="services-card-container p-4 h-100 d-flex flex-column">
      <div className="Image d-flex justify-content-center align-items-center mb-3 mx-auto">
        <img src={icon} alt={title} className="img-fluid" />
      </div>
      <h3>{title}</h3>
      <p className="mt-4 flex-grow-1">{description}</p>
      <button className="w-md-50 w-75 mx-auto" onClick={onClick}>{button}</button>
    </div>
  );
};

export default ServicesCard;
