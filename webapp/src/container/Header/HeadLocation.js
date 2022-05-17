import React from "react";
import styled from "@emotion/styled";
import AppNavigation from "./AppNavigation";
import UserNavigation from "./UserNavigation";

const HeadLocation = (props) => {
  const Navigation = styled.div`
    display: flex;
  `;
  return (
    <Navigation>
      <AppNavigation />
      <UserNavigation name={props.name} />
    </Navigation>
  );
};

export default HeadLocation;
