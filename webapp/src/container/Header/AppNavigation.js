import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const AppNavigation = (props) => {
    const StyledLink = styled(Link)`
    font-family: "Libre Baskerville", serif;
    font-family: "PT Serif", serif;
    text-decoration: none;
    margin-inline: 20px;
    border-radius: 10px;
    align-self: center;
    text-align: center;
    margin: 10px;
    width: 10%;
    &:hover {
      background-color: rgb(27, 59, 111);
      color: azure;
      border: 1px solid azure;
    }
  `;

    const Navigation = styled.div`
    width: 70%;
    justify-content: left;
    display: flex;
    margin: 0px;
    padding: 0px;
  `;
    const Nav = styled.div`
    width: 70%;
    justify-content: right;
    display: flex;
    margin: 0px;
    padding: 0px;
  `;

    return (
        <Navigation>
            <StyledLink to={"home"}>Home</StyledLink>
            <StyledLink to={"activelecture"}>Lecture</StyledLink>
            <StyledLink to={"lectureplaner"}>Planer</StyledLink>
        </Navigation>

    );
};

export default AppNavigation;
