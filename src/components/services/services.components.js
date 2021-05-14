import React from "react";
import Card from "../service-card/service-card.component";
import image1 from "../../assests/icon1.png";
import image2 from "../../assests/icon2.png";
import image3 from "../../assests/icon3.png";
import "./services.styles.scss";

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
      ],
    };
  }

  render() {
    const { cards } = this.state;
    console.log(cards);
    return (
      <div className="services-container">
        <div className="header">Services We Offer</div>
        <div class="cards-container">
          {cards.map(({ id, ...otherProps }) => (
            <Card key={id} {...otherProps} />
          ))}
        </div>
      </div>
    );
  }
}

export default Services;
