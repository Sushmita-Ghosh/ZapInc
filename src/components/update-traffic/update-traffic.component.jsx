import React from "react";

import "./update-traffic.styles.scss";

export default function UpdateTraffic({ state, sendEmail, handleChange }) {
  return (
    <>
      <form className="form" onSubmit={sendEmail}>
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

        <div className="input-container">
          <label className="input-container__title">TRAFFIC</label>
          <input
            type="text"
            name="traffic"
            className="input"
            value={state.traffic}
            onChange={handleChange}
          />
        </div>

        <div className="input-container">
          <label className="input-container__title">NAME</label>
          <input
            type="text"
            name="username"
            className="input"
            value={state.username}
            onChange={handleChange}
          />
        </div>

        <div className="input-container">
          <label className="input-container__title">EMAIL ID</label>
          <input
            type="email"
            name="email"
            className="input"
            value={state.email}
            onChange={handleChange}
          />
        </div>

        <div className="button button1">
          <div className="button-container">
            <input className="btn" type="submit" value="UPDATE" />
          </div>
        </div>
      </form>
    </>
  );
}
