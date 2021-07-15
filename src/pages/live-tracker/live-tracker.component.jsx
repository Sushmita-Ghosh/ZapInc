import React from "react";
import "./live-tracker.styles.scss";
import liveTracker from "../../assests/data/live-tracker.data";
import CircularProgressWithLabel from "../../components/circular-progress-with-label/circular-progress-with-label.components";

export default function LiveTracker() {
  const percentage = (total, completed) => {
    return Math.round((completed / total) * 100);
  };

  const createRowElement = (ele, index) => {
    return (
      <tr key={ele.serialNo}>
        <td className="row-container case">{ele.serialNo}</td>
        <td className="row-container case">{ele.jobName}</td>
        <td className="row-container case">{ele.slaName}</td>
        <td className="row-container case">{ele.totalNoOfJobs}</td>
        <td className="row-container case">{ele.noOfJobsCompleted}</td>
        <td className="row-container case">{ele.estimatedTimeLeft}</td>
        <td className="row-container case">
          <CircularProgressWithLabel
            value={percentage(ele.totalNoOfJobs, ele.noOfJobsCompleted)}
          />
        </td>
      </tr>
    );
  };

  return (
    <div className="sla-tracker">
      <h2 style={{ marginTop: "50px" }}>LIVE TRACKER</h2>

      <table className="sla_container">
        <tbody>
          <tr>
            {Object.keys(liveTracker[0]).map((ele, index) => {
              return (
                <th key={index} className="row-container case">
                  {ele}
                </th>
              );
            })}
          </tr>
          {liveTracker.map((ele, index) => createRowElement(ele, index))}
        </tbody>
      </table>
    </div>
  );
}
