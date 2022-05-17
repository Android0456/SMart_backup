import React from "react";
import styled from "@emotion/styled";

const Info = (props) => {
  const SensorData = styled.div`
    color: black;
    height: 150px;
    width: 200px;
    margin: 3px;
  `;
  const Mesured = styled.h2`
    font-family: "Libre Baskerville", serif;
    font-family: "PT Serif", serif;
    text-align: center;
    color: azure;
    border: 4px;
    margin: 4px;
    padding: 16px;
  `;

  const Value = styled.h3`
    font-family: "Libre Baskerville", serif;
    font-family: "PT Serif", serif;
    text-align: center;
    color: azure;
    font-size: 40px;
    border: 1px;
    margin: 1px;
    padding: 1px;
  `;

  return (
    <SensorData>
      <Mesured>{props.theHumid.sensor}</Mesured>
      <Value>
        <b>{props.theHumid.mesurement}</b> {props.theHumid.unit}
      </Value>
    </SensorData>
  );
};

export default Info;
