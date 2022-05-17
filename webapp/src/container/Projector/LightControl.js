import React from "react";
import styled from "@emotion/styled";

function LightControl() {
  const Controll = styled.button`
    margin-left: 4px;
    margin-right: 4px;
    font-family: "Libre Baskerville", serif;
    font-family: "PT Serif", serif;
    font-size: larger;
    border-radius: 5px;
    padding: 7px 25px;
    background-color: rgb(210, 223, 233);
    color: rgb(27, 59, 111);
    &:hover {
      background-color: rgb(27, 59, 111);
      color: azure;
    }
  `;
  return (
    <div>
      <Controll>
        <b>40%</b>
      </Controll>
      <Controll>
        <b>70%</b>
      </Controll>
      <Controll>
        <b>100%</b>
      </Controll>
    </div>
  );
}

export default LightControl;
