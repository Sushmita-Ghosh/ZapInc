import React from "react";

import "./jobs-to-table-cloner-page.styles.scss";
import TableContainer from "../../components/table/table.component";
import Button from "../../components/button/button.component";

class JobsToTableCloner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      jobDetails: "",
      showTable: false,
      headers: [
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
      ],
    };
  }

  handleChange = (e) => {
    this.setState({ jobDetails: e.target.value });
  };

  handleClick = () => {
    // console.log(this.showTable);
    this.setState({
      showTable: true,
    });
  };

  render() {
    return (
      <div className="jobs-to-table-cloner-container">
        <h2>Paste your job details below</h2>
        <textarea
          cols="70"
          rows="25"
          value={this.state.jobDetails}
          onChange={this.handleChange}
        />
        <div>
          <Button clickHandler={this.handleClick}>CONVERT</Button>
        </div>
        <div className="table-container">
          {this.state.showTable ? (
            <TableContainer
              jobDetails={this.state.jobDetails}
              headers={this.state.headers}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default JobsToTableCloner;
