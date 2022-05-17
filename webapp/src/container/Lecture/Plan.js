import React from "react";
import styled from "@emotion/styled";

function Plan(props) {
    const Info = styled.h3`
    font-family: "Libre Baskerville", serif;
    font-family: "PT Serif", serif;
    color: azure;
  `;

    const Data = styled.p`
    font-family: "Libre Baskerville", serif;
    font-family: "PT Serif", serif;
    color: azure;
    text-align: center;
  `;

    return (
        <div>
            <Info>
                Capture:
                <Data>Module {props.course.modules[3].module}</Data>
            </Info>
            <Info>
                Topic:
                <Data>{props.course.modules[3].topic}</Data>
            </Info>
            <Info>
                Content:
                <Data> {props.course.modules[3].content}</Data>
            </Info>
        </div>
    );
}

export default Plan;
