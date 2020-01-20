import React from "react";
import styled from "styled-components";

const Button = styled.button`
  border: 1px solid;
  border-color: #d6d6d6;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
  &:hover {
    box-shadow: 2px 4px 8px 2px rgba(0, 0, 0, 0.2);
  }
  ${({ large }) =>
    large
      ? `
    padding: 10px 25px;
    font-size: 18px;
  `
      : `
    padding: 5px 10px;
    width: 100px;
  `}
  ${({ primary }) =>
    primary
      ? `
    background-color: #228BE6;
    color: #fff
  `
      : `
  background-color: #eee;
  `}
`;

export default Button;
