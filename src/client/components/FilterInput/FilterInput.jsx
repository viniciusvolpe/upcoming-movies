import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.section`
  text-align: center;
  color: rgb(32, 33, 36);
  border-width: 1px 0px;
  border-style: solid;
  border-color: rgb(222, 226, 230);
  padding: 0px 40px 0px 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 1px;
`;
const Input = styled.input`
  width: 80%;
  height: 40px;
  border: 0;
`;

const FilterInput = () => {
  const [filter, setFilter] = useState();
  const handleInputChange = event => setFilter(event.target.value);
  return (
    <Container>
      <Input placeholder="Search for a movie" onChange={handleInputChange} />
    </Container>
  );
};

export default FilterInput;
