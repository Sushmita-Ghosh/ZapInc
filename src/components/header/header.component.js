import React from "react";

import "./header.styles.scss";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo">
        <h2>ZAP INC.</h2>
      </div>

      <div className="routes">
        <div className="route">JOBS TO TABLE CLONER</div>
        <div className="route">TRAFFIC UPDATER</div>
        <div className="route">SLA TRACKER</div>
      </div>
    </div>
  );
};

export default Header;
