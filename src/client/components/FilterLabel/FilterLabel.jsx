import React from "react";
import styled from "styled-components";

const ResetLink = styled.a`
  color: #228be6;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Label = styled.p`
  margin-left: 10px;
`;

const FilterLabel = ({ query, reset }) => {
  return (
    <Label>
      <ResetLink onClick={() => reset()}>Movies</ResetLink>
      {` > ${query}`}
    </Label>
  );
};

export default FilterLabel;
