import React from "react";
import styled from "styled-components";
import Button from "../Button";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`;

const LoadMore = ({ loadMore }) => {
  return (
    <Container>
      <Button large onClick={loadMore}>
        See more
      </Button>
    </Container>
  );
};

export default LoadMore;
