import React from "react";
import styled from "@emotion/styled";

function TerminPeriod(props) {
  const Time = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 8px;
    margin-bottom: 8px;
  `;

  const Info = styled.h3`
    border: 2px;
    background-color: rgb(27, 59, 111);
    font-family: "Libre Baskerville", serif;
    font-family: "PT Serif", serif;
    font-size: medium;
    margin: 2px;
    padding: 2px;
    color: rgb(180, 248, 248);
  `;

  return (
    <Time>
      <Info>Termin: {props.termin}</Info>
      <Info>Period: {props.period}</Info>
    </Time>
  );
}

export default TerminPeriod;
