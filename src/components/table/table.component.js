import React from "react";
import "./table.styles.scss";

const TableContainer = ({ jobDetails, headers }) => {
  const headings = [];
  const data = [];
  let removed_space = jobDetails.split("\n");
  removed_space.splice(0, 1);

  function findCommonElement(removed_space, headers) {
    for (let i = 0; i < removed_space.length; i++) {
      for (let j = 0; j < headers.length; j++) {
        if (removed_space[i].includes(headers[j])) {
          const data = [
            headers[j],
            removed_space[i].slice(headers[j].length + 1, -1),
          ];

          headings.push(data);
        }
      }
    }
    // Return if no common element exist
    return false;
  }

  findCommonElement(removed_space, headers);

  console.log("Headers", headings);
  // console.log("Data", data);

  return (
    <table className="customers">
      <thead>
        <tr>
          {headings.map((ele, index) => {
            return (
              <div key={index} className="row-container">
                <th>{ele[0]}</th>
                <th>{ele[1]}</th>
              </div>
            );
          })}
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  );
};

export default TableContainer;

/**
 *       let index = headers.indexOf(ele).split(-1);
      console.log(index);
      return ele.slice(index + 1, -1);
 */
