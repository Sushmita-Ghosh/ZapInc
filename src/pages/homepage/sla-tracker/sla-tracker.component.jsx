import React from "react";

import "./sla-tracker.styles.scss";
import slaTracker from "../../../assests/data/sla-tracker.data";
//import { useState, useEffect } from "react";

const headings = [
  "Functional Area",
  "Application Name",
  "Job Name",
  "SLA Definition",
  "SLA Time Window (PST)",
  // "Start Time",
  "End Time",
];

export default function SlaTracker() {
  const currentTime = new Date().toLocaleTimeString("en-US", {
    hour12: false,
    hour: "numeric",
    minute: "numeric",
  });

  //console.log(parseInt(currentTime.split(":")[0]));
  //console.log(parseInt(currentTime.split(":")[1]));

  const currentMinutes =
    parseInt(currentTime.split(":")[0]) * 60 +
    parseInt(currentTime.split(":")[1]);
  // console.log(currentMinutes);

  const createSlaRowElements = (ele, currentMinutes, index) => {
    let endTimeMinutes;
    const slaTimeMinutes =
      parseInt(ele.slaTime.split(":")[0]) * 60 +
      parseInt(ele.slaTime.split(":")[1]);

    if (ele.endTime) {
      endTimeMinutes =
        parseInt(ele.endTime.split(":")[0]) * 60 +
        parseInt(ele.endTime.split(":")[1]);
    }

    const background =
      ele.endTime === ""
        ? currentMinutes < slaTimeMinutes
          ? "yellow"
          : "red"
        : endTimeMinutes < slaTimeMinutes
        ? "blue"
        : "red";

    const color = background === "yellow" ? "black" : "white";

    const styles = {
      backgroundColor: background,
      color: color,
    };

    return (
      <tr key={ele.id} style={styles}>
        <td className="row-container">EDW</td>
        <td className="row-container">{ele.applicationName}</td>
        <td className="row-container">{ele.jobName}</td>
        <td className="row-container">{ele.slaName}</td>
        <td className="row-container">{ele.slaTime}</td>
        <td className="row-container">{ele.endTime}</td>
      </tr>
    );
  };
  // const colors = (endTime, slaTime, currentMinutes) => {
  //   if (endTime === "") {
  //     // means sla not finished yet
  //     if (currentMinutes > slaTimeMinutes) {
  //       // means sla missed
  //       return "#dc3545";
  //     } else {
  //       // we are having time still so predwait
  //       return "#ffc107";
  //     }
  //   } else {
  //     if (endTimeMinutes < slaTimeMinutes)
  //       // for completion will always be blue
  //       return "#0d6efd";
  //     else return "#dc3545";
  //   }
  // };

  return (
    <>
      <div className="sla-tracker">
        <h2>SLA TRACKER</h2>
        <table className="sla_container">
          <tr>
            {headings.map((ele, index) => {
              return (
                <th key={index} className="row-container">
                  {ele}
                </th>
              );
            })}
          </tr>
          {slaTracker.edw.data.map((ele, index) =>
            createSlaRowElements(ele, currentMinutes, index)
          )}
        </table>
      </div>
    </>
  );
}
