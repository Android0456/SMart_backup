import React from "react";
import styled from "@emotion/styled";



function PlanerInfo(props) {
  const Create = styled.input`
    font-family: "Libre Baskerville", serif;
    font-family: "PT Serif", serif;
    font-size: large;
    border: 1px solid transparent;
    margin-left: 80%;
    margin-bottom: 4%;
    color: azure;
    background-color: rgb(27, 59, 111);
    &:hover {
      border: 1px solid azure;
      border-radius: 15px;
      width: fit-content;
    }
  `;

  const PlanerBox = styled.div`
    border: 1px solid;
    border-radius: 70px 30px;
    width: 80%;
    background-color: rgb(27, 59, 111);
    margin: 10px;
  `;

  const Heading = styled.h1`
    text-align: center;
    font-family: "Libre Baskerville", serif;
    font-family: "PT Serif", serif;
    color: azure;
    margin: 4%;
  `;
  const Row = styled.div`
    justify-content: space-between;
    display: flex;
  `;

  const Info = styled.h3`
    font-family: "Libre Baskerville", serif;
    font-family: "PT Serif", serif;
    color: azure;
    margin-right: 30px;
    margin-left: 3%;
    align-self: center;
  `;

  const SelectItems = styled.select`
    border-radius: 15px;
    border: transparent;
    width: 50%;
    height: fit-content;
    font-family: "Libre Baskerville", serif;
    font-family: "PT Serif", serif;
    font-size: large;
    text-align: center;
    align-self: center;
    margin-right: 25%;
  `;
  const LecureDate = styled.input`
    border: transparent;
    border-radius: 15px;
    font-family: "Libre Baskerville", serif;
    font-family: "PT Serif", serif;
    font-size: large;
    text-align: center;
    width: 50%;
    height: fit-content;
    align-self: center;
    margin-right: 25%;
  `;

  return (
    <PlanerBox>
      <Heading>Lecture planer</Heading>
      <form>
        <Row>
          <Info>Select Course</Info>
          <SelectItems id="Course">
            <option>Select Course: </option>
            <option>{props.Course}</option>  

          </SelectItems>        
        </Row>

        <Row>
          <Info>Select Capture</Info>
          <SelectItems id="Capture">
            <option>Select Capture</option>
            <option>{props.Capture}</option>
          </SelectItems>
        </Row>
        <Row>
          <Info>Topic</Info>
        </Row>
        <Row>
          <Info>Content: </Info>
        </Row>

        <Row>
          <Info>Select room</Info>
          <SelectItems id="room">
            <option>Select room</option>
            <option>{props.room}</option>
          </SelectItems>
        </Row>

        <Row>
          <Info>Select date</Info>
          <LecureDate id="date" type="date"></LecureDate>
        </Row>

        <Row>
          <Info>Select timeslot</Info>
          <SelectItems id="time" placeholder="time_slot">
            <option>Select time slot</option>
            <option>08:00 - 10:00</option>
            <option>10:00 - 12:00</option>
            <option>12:00 - 15:00</option>
            <option>15:00 - 17:00</option>
          </SelectItems>
        </Row>
        <Create type="submit" value="Create lecture" />
      </form>
      
    </PlanerBox>
  );
}


export default PlanerInfo;
