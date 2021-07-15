import React from "react";
import "./checkpoints.styles.scss";
import checkpoints from "./../../assests/data/checkpoints.data";

export default function CheckPoints() {
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
  console.log(currentMinutes);

  const handleBackgroundColor = (
    endTime,
    startTime,
    currentMinutes,
    maxTimeInMinutes,
    endTimeInMinutes
  ) => {
    if (endTime === "") {
      if (startTime) {
        //executing
        return "green";
      } else {
        // if the job has not started yet
        if (maxTimeInMinutes < currentMinutes) return "yellow";
        // waiting
        else return "red"; // Overdue
      }
    } else {
      if (endTimeInMinutes < maxTimeInMinutes) return "blue";
      // completed
      else return "red"; // delayed
    }
  };

  const createRowElement = (ele, index, currentMinutes) => {
    let endTimeInMinutes, startTimeInMinutes;
    // calculating the max time
    const maxTimeInMinutes =
      parseInt(ele.maxTime.split(":")[0]) * 60 +
      parseInt(ele.maxTime.split(":")[1]);

    if (ele.endTime) {
      endTimeInMinutes =
        parseInt(ele.endTime.split(":")[0]) * 60 +
        parseInt(ele.endTime.split(":")[1]);
    }

    if (ele.startTime) {
      startTimeInMinutes =
        parseInt(ele.startTime.split(":")[0]) * 60 +
        parseInt(ele.startTime.split(":")[1]);
    }

    // setting the background color
    const background = handleBackgroundColor(
      ele.endTime,
      ele.startTime,
      currentMinutes,
      maxTimeInMinutes,
      endTimeInMinutes
    );

    //setting the color based on background
    const color = background === "yellow" ? "black" : "white";

    const styles = {
      backgroundColor: background,
      color: color,
    };

    const statusMessage = () => {
      if (background === "yellow") return "Waiting";
      if (background === "blue") return "On Track";
      if (background === "green") return "Executing";
      if (background === "red") {
        if (ele.endTime === "") return "Overdue";
        else return "Delayed";
      }
    };

    // the row element
    return (
      <tr key={ele.serialNo} style={styles}>
        <td className="row-container case">{ele.serialNo}</td>
        <td className="row-container case">{ele.slaJobName}</td>
        <td className="row-container case">{ele.applicationName}</td>
        <td className="row-container case">{ele.jobName}</td>
        <td className="row-container case">{ele.jobType}</td>
        <td className="row-container case">{ele.homeApplicationName}</td>
        <td className="row-container case">{ele.expectedTime}</td>
        <td className="row-container case">{ele.maxTime}</td>
        <td className="row-container case">{ele.startTime}</td>
        <td className="row-container case">{ele.endTime}</td>
        <td className="row-container case">{statusMessage()}</td>
      </tr>
    );
  };

  return (
    <div className="sla-tracker">
      <h2>CHECKPOINTS</h2>
      <table className="sla_container">
        <tbody>
          <tr>
            {Object.keys(checkpoints[0]).map((ele, index) => {
              return (
                <th key={index} className="row-container case">
                  {ele}
                </th>
              );
            })}
          </tr>
          {checkpoints.map((ele, index) =>
            createRowElement(ele, index, currentMinutes)
          )}
        </tbody>
      </table>
    </div>
  );
}
