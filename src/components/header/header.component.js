import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";

const Header = () => {
  return (
    <div className="header-container">
      <Link to="/" className="logo">
        <h2>ZAP INC.</h2>
      </Link>

      <div className="routes">
        <Link className="route" to="/JobsToTableCloner">
          JOBS TO TABLE CLONER
        </Link>
        <Link className="route" to="/TrafficUpdater">
          TRAFFIC UPDATER
        </Link>
        <Link className="route" to="/SlaTracker">
          SLA TRACKER
        </Link>
      </div>
    </div>
  );
};

export default Header;
