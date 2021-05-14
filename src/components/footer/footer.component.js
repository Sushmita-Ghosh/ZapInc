import React from "react";
import "./footer.styles.scss";
import Zoom from "react-reveal/Zoom";

const Footer = () => {
  return (
    <div className="footer-container">
      <Zoom>
        <div className="footer-spacing-container">
          <div className="enquiry-container">
            <h2>For any enquires:</h2>
            <h2>Reach out to Us at : dummy@gmail.com</h2>
            <h2>Contant: 123456789</h2>
          </div>
          <div className="copyright-container">
            <h3>©Copyright Vlaca. All-Right Reserved</h3>
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default Footer;
