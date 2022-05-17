import React from "react";
import styled from "@emotion/styled";

const Logo = () => {
  const Icon = styled.img`
    height: 150%;
    margin-right: 20px;
    margin-top: 4px;
  `;

  return <Icon src="./icons/app-icon.png" alt="App icon" />;
};

export default Logo;
