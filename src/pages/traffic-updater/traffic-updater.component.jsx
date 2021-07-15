import React, { useState } from "react";

import "./traffic-updater.styles.scss";
import emailjs from "emailjs-com";
import Traffic from "../../components/traffic/traffic.component";
import FetchTraffic from "../../components/fetch-traffic/fetch-traffic.component";
import UpdateTraffic from "../../components/update-traffic/update-traffic.component";

export default function TrafficUpdater() {
  const [showTraffic, setShowTraffic] = useState(false);
  const [isFetch, setIsFetch] = useState(true);
  const [isUpdate, setIsUpdate] = useState(false);

  const INITIAL_STATE = {
    store: "",
    date: "",
    type: "RAW",
    traffic: "",
    email: "",
    username: "",
  };

  const [state, setState] = useState(INITIAL_STATE);

  const showFetchBox = () => {
    setIsFetch(true);
    setIsUpdate(false);
    // off the traffic box
    setShowTraffic(false);
    // resetting the state values
    setState(INITIAL_STATE);
  };

  const showUpdateBox = () => {
    setIsFetch(false);
    setIsUpdate(true);
    setShowTraffic(false);
    // resetting the state values
    setState(INITIAL_STATE);
  };

  // for sending mails
  const sendEmail = (e) => {
    console.log("in");
    e.preventDefault();

    setShowTraffic(!showTraffic);

    emailjs
      .sendForm(
        "service_x6i6dwh",
        "template_4d8m5aj",
        e.target,
        "user_DMhEVv5WUpky7yhmLJqKt"
      )
      .then(
        (result) => {
          console.log("Success", result.text);
        },
        (error) => {
          console.log("Error!", error.text);
        }
      );

    // to reset the form fields
    e.target.reset();
  };
  const handleTraffic = (e) => {
    setShowTraffic(!showTraffic);
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setState({
      ...state,
      [name]: value,
    });

    //console.log(state);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="traffic-updater-container">
      <h2>Traffic Updater</h2>

      <div className="box-controller">
        <div
          className={"option " + (isFetch ? "active" : "")}
          onClick={showFetchBox}
        >
          FETCH
        </div>
        <div
          className={"option " + (isUpdate ? "active" : "")}
          onClick={showUpdateBox}
        >
          UPDATE
        </div>
      </div>

      {isFetch && (
        <FetchTraffic
          state={state}
          handleChange={handleChange}
          handleTraffic={handleTraffic}
          handleSubmit={handleSubmit}
        />
      )}

      {isUpdate && (
        <UpdateTraffic
          state={state}
          handleChange={handleChange}
          handleTraffic={handleTraffic}
          sendEmail={sendEmail}
        />
      )}

      {showTraffic && isFetch && <Traffic state={state} isFetch={isFetch} />}
      {showTraffic && isUpdate && <Traffic state={state} isFetch={isFetch} />}
    </div>
  );
}
