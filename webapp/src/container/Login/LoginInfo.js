import React from "react";
import './start.css';
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

function LoginInfo(props) {
    
    const Navigation = styled.div`
    width: 100%;
    justify-content: right;
    display: flex;
  `;
    const StyledLink = styled(Link, props)`
    font-family: "Libre Baskerville", serif;
    font-family: "PT Serif", serif;
    text-decoration: none;
    margin-inline: 20px;
    border-radius: 10px;
    align-self: center;
    text-align: center;
    margin: 15px;
    width: 10%;
    &:hover {
      background-color: rgb(27, 59, 111);
      color: azure;
      border: 1px solid azure;
    }
  `;
    return (
        <div className="contentbox">

            <div className="midbox">

                <div className="formbox">
                    <div className="row1">Login</div>
                    <div className="row2">Email</div>
                    <div className="row3"><input className="inputbox" placeholder="Enter Username" onInput={e => props.setEmail(e.target.value)}></input></div>
                    <div className="row4">Password</div>
                    <div className="row5"><input className="inputbox" type="password" placeholder="Enter Password" onInput={e => props.setPassword(e.target.value)}></input></div>
                    <Navigation>
                    <StyledLink to={"home"} onClick={ e => {props.LoginUser()}}>Log In</StyledLink>
                    </Navigation>
                </div>
                
            </div>
        </div >
    );
}

export default LoginInfo;
