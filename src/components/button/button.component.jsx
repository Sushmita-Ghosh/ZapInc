import React from "react";
import "./button.styles.scss";

export default function Button({ children, clickHandler }) {
  return (
    <div className="button-container">
      <button className="btn" onClick={clickHandler}>
        {children}
      </button>
    </div>
  );
}
