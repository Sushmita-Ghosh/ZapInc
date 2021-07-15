import React from "react";
import "./traffic.styles.scss";

export default function Traffic({ state, isFetch }) {
  const { store, date, type, traffic = "20" } = state;
  return (
    <>
      {isFetch ? null : (
        <div className="text-box">
          <p className="text-box-content">
            Hi you request has been recorded ! Our Admins are working on it
          </p>
          <p className="text-box-content"> Below are the details:</p>
        </div>
      )}
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
            TRAFFIC : <span>{traffic ? traffic : "20"}</span>
          </h3>
        </div>
      </div>
    </>
  );
}
