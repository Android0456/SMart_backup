import React from "react";
import styled from "@emotion/styled";

const Info = (props) => {
  const SensorData = styled.div`
    height: 150px;
    width: 20%;
    margin: 0px;
    padding: 0px;
  `;
  const Mesured = styled.h2`
    font-family: "Libre Baskerville", serif;
    font-family: "PT Serif", serif;
    text-align: center;
    text-size: 35px;
    color: azure;
    margin 2px;
  `;

  const Value = styled.div`
    font-family: "Libre Baskerville", serif;
    font-family: "PT Serif", serif;
    text-align: center;
    color: azure;
    font-size: 25px;
    margin: 1px;
    padding: 1px;
  `;

  return (
    <SensorData>
      <Mesured>{props.quality[0]}</Mesured>
      <Value>
        <b>{props.quality[1]}</b> {props.quality[2]}
      </Value>
    </SensorData>
  );
};

export default Info;
