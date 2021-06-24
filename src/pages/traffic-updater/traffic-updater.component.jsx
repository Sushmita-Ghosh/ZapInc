import React, { useState } from "react";

import "./traffic-updater.styles.scss";
import Button from "../../components/button/button.component";
import Traffic from "../../components/traffic/traffic.component";

export default function TrafficUpdater() {
  const [showTraffic, setShowTraffic] = useState(false);

  const [state, setState] = useState({
    store: "",
    date: "",
    type: "RAW",
  });

  const handleTraffic = (e) => {
    setShowTraffic(!showTraffic);
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setState({
      ...state,
      [name]: value,
    });

    console.log(state);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="traffic-updater-container">
      <h2>Traffic Updater</h2>

      <form className="form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label className="input-container__title">STORE NO</label>
          <input
            type="text"
            name="store"
            className="input"
            value={state.store}
            onChange={handleChange}
          />
        </div>

        <div className="input-container">
          <label className="input-container__title">DATE</label>
          <input
            type="date"
            name="date"
            placeholder="date"
            className="input"
            value={state.date}
            onChange={handleChange}
          />
        </div>

        <div className="input-container">
          <label className="input-container__title">TYPE</label>
          <select
            name="type"
            className="input"
            value={state.type}
            onChange={handleChange}
          >
            <option value="raw">RAW</option>
            <option value="porated">PORATED</option>
            <option value="auditted">AUDITTED</option>
          </select>
        </div>
      </form>

      <div className="button">
        <Button clickHandler={handleTraffic}>FETCH</Button>
      </div>

      {showTraffic ? (
        <Traffic store={state.store} date={state.date} type={state.type} />
      ) : null}
    </div>
  );
}
