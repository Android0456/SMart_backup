import React from "react";
import HumidityInfo from "../container/Sensors/Humidity/HumidtyInfo";
import styled from "@emotion/styled";

function HumidtyPresenter(props) {
  const HumdBody = styled.div`
    margin: 4px;
  `;

  return (
    <HumdBody>
      <HumidityInfo room={"Lecture room A"} />
    </HumdBody>
  );
}

export default HumidtyPresenter;
