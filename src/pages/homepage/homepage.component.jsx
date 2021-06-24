import React from "react";

import Home from "../../components/home/home.component";
import Services from "../../components/services/services.components";
import Footer from "../../components/footer/footer.component";

import "./homepage.styles.scss";

const HomePage = () => {
  return (
    <>
      <Home />
      <Services />
      <Footer />
    </>
  );
};

export default HomePage;
