import React from "react";
import Particles from "react-particles-js";
import particleConfig from "./particle.config";
import "./particle.styles.scss";
const Particle = () => {
  return (
    <div className="particle-container">
      <div className="content">Welcome to Zap Inc.</div>
      <Particles params={particleConfig} />
    </div>
  );
};

export default Particle;
