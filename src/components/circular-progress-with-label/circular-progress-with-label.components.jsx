import React from "react";
import "./circular-progress-with-label.styles.scss";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100px;
  justify-content: center;
  align-items: center;

  .percent {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100px;
    justify-content: center;
    align-items: center;

    svg {
      position: relative;
      width: 100%;
      height: 100%;
      margin-top: 5px;

      circle {
        width: 100%;
        height: 100%;
        fill: none;
        stroke-width: 7;
        stroke: #000;
        transform: translate(5px, 5px);
        stroke-dasharray: 260;
        stroke-dashoffset: 260;

        &:nth-child(1) {
          stroke-dashoffset: 0;
          stroke: #ddd;
        }

        &:nth-child(2) {
          stroke-dashoffset: ${(props) => 260 - (260 * props.value) / 100};
          stroke: #03a9f4;
        }
      }
    }

    .number {
      position: absolute;
      top: 135%;
      left: 4%;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #999;

      h2 {
        font-size: 1.5rem;

        span {
          font-size: 0.8rem;
        }
      }
    }
  }
`;

export default function CircularProgressWithLabel(props) {
  return (
    <Box value={props.value}>
      <div className="percent">
        <svg height="100" width="100">
          <circle cx="40" cy="40" r="40"></circle>
          <circle cx="40" cy="40" r="40"></circle>
        </svg>

        <div className="number">
          <h2>
            {props.value}
            <span>%</span>
          </h2>
        </div>
      </div>
    </Box>
  );
}
