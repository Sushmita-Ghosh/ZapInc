import React, { useState } from "react";

import "./jobs-to-table-cloner-page.styles.scss";
import TableContainer from "../../components/table/table.component";

import ClonerTabs from "../../components/cloner-tabs/cloner-tabs.component";

const JobsToTableCloner = () => {
  const [jobDetails, setJobDetails] = useState("");
  const [showTable, setShowTable] = useState(false);
  const [jobObject, setJobObject] = useState({});
  const [loadTable, setLoadTable] = useState(false);
  const [headers, setHeaders] = useState([
    "Field",
    "Application Name",
    "Generation Number",
    "Job Name",
    "State",
    "Job ID",
    "Job Type",
    "Predecessors",
    "Successors",
    "Start Time",
    "End Time",
    "Agent Name",
    "Average Execution Time",
    "Anticipated End Time",
    "Completion Code",
    "Submission Count",
    "Run a script",
    "Arguments to pass",
    "User ID",
  ]);

  const handleChange = (e) => {
    setJobDetails(e.target.value);
  };

  const handlePaste = (e) => {
    setJobDetails(e.clipboardData.getData("Text"));
    setShowTable(true);
  };

  return (
    <div className="jobs-to-table-cloner-container">
      <h2>Paste your job details below</h2>

      <div className="table-container">
        {showTable ? (
          <TableContainer
            jobDetails={jobDetails}
            headers={headers}
            setJobObject={setJobObject}
            jobObject={jobObject}
            // setLoadTable={setLoadTable}
          />
        ) : (
          <textarea
            cols="70"
            rows="25"
            value={jobDetails}
            onChange={handleChange}
            onPaste={handlePaste}
          />
        )}
      </div>

      {Object.keys(jobObject).length > 0 ? (
        <ClonerTabs jobObject={jobObject} />
      ) : null}
    </div>
  );
};

export default JobsToTableCloner;
