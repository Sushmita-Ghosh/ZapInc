import React from "react";

import "./service-card.styles.scss";
import Slide from "react-reveal/Slide";

const Card = ({ iconName, heading, description }) => {
  // console.log(heading);
  return (
    <div className="card-container">
      <div className="icon">
        <img src={iconName} />
      </div>
      <div className="content">
        <h2 className="title">{heading}</h2>
        <p className="desc">{description}</p>
      </div>
    </div>
    // </Slide>
  );
};

export default Card;
