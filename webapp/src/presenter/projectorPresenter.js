import React from "react";
import styled from "@emotion/styled";
import ProjectorInfo from "../container/Projector/projectorInfo";
import { Room } from "../model/data/Room";

function ProjectorPresenter(props) {
    const Info = styled.h3`
    font-family: "Libre Baskerville", serif;
    font-family: "PT Serif", serif;
    text-align: center;
    color: azure;
  `;
    const Proj = styled.div`
    margin: 4px;
    border-radius: 70px 30px 70px 30px;
    background-color: #86003c;
    height: 350px;
  `;

    return (
        <Proj>
            <Info>Available projectors</Info>
            <ProjectorInfo room={Room} />
        </Proj>
    );
}

export default ProjectorPresenter;
