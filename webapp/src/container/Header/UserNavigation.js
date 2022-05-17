import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const UserNavigation = (props) => {
  
    const Navigation = styled.div`
    width: 70%;
    justify-content: right;
    display: flex;
  `;
    const Nav = styled.h4`
    background-image: linear-gradient(
      transparent 0%,
      transparent 90%,
      rgb(167, 17, 69) 90%,
      rgb(167, 17, 69) 100%
    );
    background-repeat: no-repeat;
    background-size: 0% 100%;
    background-position-x: right;

    transition: 300ms;

    font-family: "Libre Baskerville", serif;
    font-family: "PT Serif", serif;
    margin-inline: 20px;
    &:hover {
      background-size: 100% 100%;
      background-position-x: left;
    }
  `;
    const StyledLink = styled(Link, props)`
  font-family: "Libre Baskerville", serif;
  font-family: "PT Serif", serif;
  text-decoration: none;
  margin-inline: 27px;
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
    return (
        <Navigation>
            <Nav>{props.name}</Nav>
            <StyledLink to ={"/"} onClick={e =>{props.logoutUser()}}>Logout
            </StyledLink>
        </Navigation >
    );
};

export default UserNavigation;
