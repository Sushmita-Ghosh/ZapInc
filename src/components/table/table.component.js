import React, { useEffect, useState } from "react";
import "./table.styles.scss";
import ClonerTabs from "../cloner-tabs/cloner-tabs.component";

const TableContainer = ({ jobDetails, headers, setJobObject, jobObject }) => {
  function buildJobObjectFromCawa(dataObj, removed_space, headers) {
    for (let i = 0; i < removed_space.length; i++) {
      for (let j = 0; j < headers.length; j++) {
        if (removed_space[i].includes(headers[j])) {
          dataObj = {
            ...dataObj,
            [headers[j]]: removed_space[i].slice(headers[j].length + 1, -2),
          };
        }
      }
    }
    return dataObj ? dataObj : false;
  }

  useEffect(() => {
    let dataObj = {};
    let removed_space = jobDetails.split("\n");
    removed_space.splice(0, 1);
    let data = buildJobObjectFromCawa(dataObj, removed_space, headers);
    setJobObject(data);
  }, [setJobObject, jobDetails, headers]);

  return (
    <>
      <table className="customers">
        <thead>
          <tr>
            {Object.keys(jobObject).map((ele, index) => {
              return (
                <div key={index} className="row-container">
                  <th>{ele}</th>
                  <th>{jobObject[ele]}</th>
                </div>
              );
            })}
          </tr>
        </thead>
      </table>
    </>
  );
};

export default TableContainer;

/**
 *       let index = headers.indexOf(ele).split(-1);
      console.log(index);
      return ele.slice(index + 1, -1);
 */
