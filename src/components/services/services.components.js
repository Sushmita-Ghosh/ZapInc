import React from "react";
import Card from "../service-card/service-card.component";
import image1 from "../../assests/icon1.png";
import image2 from "../../assests/icon2.png";
import image3 from "../../assests/icon3.png";
import image4 from "../../assests/icon4.png";
import "./services.styles.scss";
import Fade from "react-reveal/Slide";

class Services extends React.Component {
  constructor() {
    super();

    this.state = {
      cards: [
        {
          id: 1,
          iconName: image1,
          heading: "Jobs to Table Cloner",
          description:
            "Paste your cawa jobs here, and we will display in table format",
        },
        {
          id: 2,
          iconName: image2,
          heading: "Traffic Updater",
          description: "Update Traffic for Stores in Database",
        },
        {
          id: 3,
          iconName: image3,
          heading: "SLA Tracker",
          description: "Track Your SLA's",
        },
        {
          id: 4,
          iconName: image4,
          heading: "Checkpoints",
          description: "Track Your Checkpoints",
        },
        {
          id: 5,
          iconName: image4,
          heading: "Live Tracker",
          description: "Track Percentage Completion Of Your Jobs",
        },
      ],
    };
  }

  render() {
    const { cards } = this.state;
    console.log(cards);
    return (
      <div className="services-container">
        <div className="header">Services We Offer</div>
        <Fade left>
          <div className="cards-container">
            {cards.map(({ id, ...otherProps }) => (
              <Card key={id} {...otherProps} />
            ))}
          </div>
        </Fade>
      </div>
    );
  }
}

export default Services;
