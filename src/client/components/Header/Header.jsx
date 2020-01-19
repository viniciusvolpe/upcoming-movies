import React from "react";
import styled from "styled-components";

const HeaderDiv = styled.div`
  width: 100%;
  background-color: #282c34;
  color: #ffffff;
  padding: 20px;
  text-align: center;
`;

const MainTitle = styled.h1`
  font-size: bold;
`;

const Subtitle = styled.h3`
  margin: 0px;
  font-size: small;
  color: #b7b7b7;
`;

const Header = () => {
  return (
    <HeaderDiv>
      <MainTitle>Upcoming movies</MainTitle>
      <Subtitle>See what's coming in the world of cinema</Subtitle>
    </HeaderDiv>
  );
};

export default Header;
