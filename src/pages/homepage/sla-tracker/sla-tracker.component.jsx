import React from "react";

import "./sla-tracker.styles.scss";
import slaTracker from "../../../assests/data/sla-tracker.data";

const headings = [
  "Functional Area",
  "Application Name",
  "Job Name",
  "SLA Definition",
  "SLA Time Window (PST)",
  "Start Time",
  "End Time",
];

export default function SlaTracker() {
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

          {slaTracker.edw.data.map((ele, index) => (
            <tr key={index}>
              <td className="row-container">EDW</td>
              <td className="row-container">{ele.applicationName}</td>
              <td className="row-container">{ele.jobName}</td>
              <td className="row-container">{ele.slaName}</td>
              <td className="row-container">{ele.slatime}</td>
              <td className="row-container"></td>
              <td className="row-container"></td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}
