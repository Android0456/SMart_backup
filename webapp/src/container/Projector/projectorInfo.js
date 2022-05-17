import React from "react";
import styled from "@emotion/styled";
import Projector from "./Projector";
import Lights from "./Lights";

function ProjectorInfo(props) {
  const Info = styled.h3`
    font-family: "Libre Baskerville", serif;
    font-family: "PT Serif", serif;
    text-align: center;
    color: azure;
  `;
  const Controls = styled.div`
    text-align: center;
  `;
  const ProjSide = styled.div`
    border: 2px solid black;
    height: 70%;
    border-radius: 25px;
    background-color: rgb(28, 114, 147);
    justify-content: space-around;
    margin-left: 10%;
    margin-right: 10%;
    margin-bottom: 5px;
    display: flex;
  `;

  return (
    <Controls>
      <ProjSide>
        {props.room.projectors.map(function (aproj) {
          return <Projector project={aproj} />;
        })}
      </ProjSide>
      <Info>Light control</Info>
      <Lights />
    </Controls>
  );
}

export default ProjectorInfo;
