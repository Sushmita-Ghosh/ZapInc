import React from "react";
import Button from "../button/button.component";
import "./fetch-traffic.styles.scss";

export default function FetchTraffic({
  state,
  handleChange,
  handleSubmit,
  handleTraffic,
}) {
  return (
    <>
      <form className="form1" onSubmit={handleSubmit}>
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
    </>
  );
}
