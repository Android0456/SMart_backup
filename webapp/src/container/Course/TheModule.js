import React from "react";
import styled from "@emotion/styled";

function TheModule(props) {
  const AModel = styled.div`
    padding-top: 8px;
    padding-bottom: 8px;
  `;

  const RowInfo = styled.h2`
    border: 2px;
    font-family: "Libre Baskerville", serif;
    font-family: "PT Serif", serif;
    font-size: medium;
    margin: 2px;
    padding: 2px;
    color: rgb(180, 248, 248);
  `;

  const Descript = styled.p`
    border: 2px;
    font-family: "Libre Baskerville", serif;
    font-family: "PT Serif", serif;
    font-size: medium;
    margin: 2px;
    padding: 2px;
    color: rgb(180, 248, 248);
  `;

  return (
    <AModel>
      <RowInfo>
        <b>Module:</b> {props.module}
      </RowInfo>
      <RowInfo>
        <b> Topic: </b>
        {props.topic}
      </RowInfo>
      <RowInfo> Description:</RowInfo>
      <Descript> {props.description}</Descript>
    </AModel>
  );
}

export default TheModule;
