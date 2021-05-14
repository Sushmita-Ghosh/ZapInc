import React from "react";
import Particles from "react-particles-js";
import particleConfig from "./particle.config";
import "./particle.styles.scss";
import Bounce from "react-reveal/Bounce";
const Particle = () => {
  return (
    <div className="particle-container">
      <Bounce top>
        <div className="content">Welcome to Zap Inc.</div>
      </Bounce>
      <Particles params={particleConfig} />
    </div>
  );
};

export default Particle;
