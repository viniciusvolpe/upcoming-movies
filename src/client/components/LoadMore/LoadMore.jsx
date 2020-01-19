import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`;
const LoadMoreButton = styled.button`
  padding: 10px 25px;
  background-color: #eee;
  border: 1px solid;
  border-color: #d6d6d6;
  border-radius: 2px;
  font-size: 18px;
  cursor: pointer;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
  &:hover {
    box-shadow: 2px 4px 8px 2px rgba(0, 0, 0, 0.2);
  }
`;

const LoadMore = ({ loadMore }) => {
  return (
    <Container>
      <LoadMoreButton onClick={loadMore}>See more</LoadMoreButton>
    </Container>
  );
};

export default LoadMore;
