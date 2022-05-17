import React from "react";
import styled from "@emotion/styled";

const Company = () => {
    const Comp = styled.div`
    text-align: center;
    margin-top: 4px;
  `;
    const ProductName = styled.h2`
    margin: 0 auto;
    font-family: "Libre Baskerville", serif;
    font-family: "PT Serif", serif;
    font-size: 30px;
  `;
    const WebAppName = styled.h3`
    margin: 0 auto;
    font-family: "Libre Baskerville", serif;
    font-family: "PT Serif", serif;
    font-size: larger;
  `;
    return (
        <Comp>
            <ProductName>SMART ROOM</ProductName>
            <WebAppName>DISTANCE LECTURE</WebAppName>
        </Comp>
    );
};

export default Company;
