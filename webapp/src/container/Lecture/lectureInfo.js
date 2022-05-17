import React from "react";
import styled from "@emotion/styled";
import Booked from "./Booked";
import Plan from "./Plan";

function lectureInfo(props) {
  const LectureSide = styled.div`
    border-radius: 15px 50px;
    background-color: rgb(27, 59, 111);
    padding: 10px;
    margin-top: 4px;
    margin-bottom: 4px;
  `;
  return (
    <LectureSide>
      <Booked lecture={props.lecture} />
      <Plan course={props.course[0]} />
    </LectureSide>
  );
}

export default lectureInfo;
