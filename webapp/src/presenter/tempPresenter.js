import React from "react";
import TempInfo from "../container/Sensors/temperature/TempInfo";
import styled from "@emotion/styled";

function tempPresenter(props) {
  const TempBody = styled.div`
    margin: 4px;
  `;

  return (
    <TempBody>
      <TempInfo />
    </TempBody>
  );
}

export default tempPresenter;
