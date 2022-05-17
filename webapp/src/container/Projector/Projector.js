import React from "react";
import styled from "@emotion/styled";

function Projector(props) {
  const TheProjector = styled.div`
    text-align: center;
  `;
  const OnOff = styled.button`
    border: 5px solid rgb(167, 17, 69);
    border-radius: 25px;
    width: 200px;
    height: 100px;
    font-family: "Libre Baskerville", serif;
    font-family: "PT Serif", serif;
    font-size: xx-large;
    margin-top: 20px;
    &:hover {
      box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
        0 17px 50px 0 rgba(0, 0, 0, 0.19);
    }
  `;
  const Info = styled.h2`
    color: azure;
    font-family: "Libre Baskerville", serif;
    font-family: "PT Serif", serif;
  `;

  return (
    <TheProjector>
      <OnOff>ON</OnOff>

      <Info>{props.project.name}</Info>
    </TheProjector>
  );
}

export default Projector;
