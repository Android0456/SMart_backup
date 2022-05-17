import React from "react";
import styled from "@emotion/styled";
import Logo from "./Logo";
import Company from "./Company";

const Product = () => {
  const Banner = styled.div`
    display: flex;
    justify-content: center;
    height: 35px;
  `;
  return (
    <Banner>
      <Logo />
      <Company />
    </Banner>
  );
};

export default Product;
