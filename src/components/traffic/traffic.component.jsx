import React from "react";
import "./traffic.styles.scss";

export default function Traffic({ store, date, type }) {
  return (
    <div className="traffic-container">
      <div className="traffic-container_box">
        <h3 className="traffic-container_box__title">
          STORE NO : <span>{store}</span>
        </h3>
      </div>

      <div className="traffic-container_box">
        <h3 className="traffic-container_box__title">
          DATE : <span>{date}</span>
        </h3>
      </div>

      <div className="traffic-container_box">
        <h3 className="traffic-container_box__title">
          TYPE : <span>{type}</span>
        </h3>
      </div>

      <div className="traffic-container_box">
        <h3 className="traffic-container_box__title">
          TRAFFIC : <span>20</span>
        </h3>
      </div>
    </div>
  );
}
