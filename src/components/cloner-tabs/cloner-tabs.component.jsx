import React from "react";
import { useState } from "react";
import jobFailures from "../../assests/data/cloner.data";
import "./cloner-tabs.styles.scss";

export default function ClonerTabs({ jobObject }) {
  console.log(jobObject["Job Name"]);

  const [failureStep, setFailureStep] = useState(true);
  const [failureSolution, setFailureSolution] = useState(false);
  const [resolutionSteps, setResolutionSteps] = useState(false);
  const [fullLog, setFullLog] = useState(false);

  const showFailureStepBox = () => {
    setFailureStep(true);
    setFailureSolution(false);
    setResolutionSteps(false);
    setFullLog(false);
  };

  const showFailureSolutionBox = () => {
    setFailureStep(false);
    setFailureSolution(true);
    setResolutionSteps(false);
    setFullLog(false);
  };

  const showResolutionBox = () => {
    setFailureStep(false);
    setFailureSolution(false);
    setResolutionSteps(true);
    setFullLog(false);
  };

  const showLogBox = () => {
    setFailureStep(false);
    setFailureSolution(false);
    setResolutionSteps(false);
    setFullLog(true);
  };
  return (
    <div className="cloner-tabs">
      <div className="box">
        <div
          className={"options " + (failureStep ? "is-active" : "")}
          onClick={showFailureStepBox}
        >
          FAILURE STEP
        </div>
        <div
          className={"options " + (failureSolution ? "is-active" : "")}
          onClick={showFailureSolutionBox}
        >
          SOLUTION
        </div>
        <div
          className={"options " + (resolutionSteps ? "is-active" : "")}
          onClick={showResolutionBox}
        >
          RESOLUTION
        </div>

        <div
          className={"options " + (fullLog ? "is-active" : "")}
          onClick={showLogBox}
        >
          LOG DETAILS
        </div>
      </div>

      {/* show the textarea boxes */}
      <div className="center">
        {failureStep && (
          <textarea
            cols="70"
            rows="25"
            value={jobFailures[jobObject["Job Name"]].failureStep}
          />
        )}
      </div>

      <div className="center">
        {failureSolution && (
          <textarea
            cols="70"
            rows="25"
            value={jobFailures[jobObject["Job Name"]].failureSolution}
          />
        )}
      </div>
      <div className="center">
        {resolutionSteps && (
          <textarea
            cols="70"
            rows="25"
            value={jobFailures[jobObject["Job Name"]].resolutionSteps}
          />
        )}
      </div>

      <div className="center">
        {fullLog && (
          <textarea
            cols="70"
            rows="25"
            value={jobFailures[jobObject["Job Name"]].fullLog}
          />
        )}
      </div>
    </div>
  );
}
