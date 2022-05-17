import React from "react";
import styled from "@emotion/styled";
import HeadLocation from "./HeadLocation";
import Product from "./Product";

const Header = (props) => {
    const Header = styled.div`
    background-color: rgb(159, 179, 194);
    justify-content: center;
  `;

    return (
        <Header>
            <Product />
            <HeadLocation name={props.name} />
        </Header>
    );
};

export default Header;
