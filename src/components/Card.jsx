import React from "react";

const Card = ({ icon, title, description }) => {
  return (
    <div className="card-container text-center p-4 px-5 h-100 d-flex flex-column">
      <div className="icon d-flex justify-content-center align-items-center mb-3 mx-auto">
        <div className="icon-div">
        {icon}
        </div>
      </div>
      <h3>{title}</h3>
      <p className="mt-4 flex-grow-1">{description}</p>
    </div>
  );
};

export default Card;
