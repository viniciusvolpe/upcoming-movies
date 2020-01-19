import React from "react";
import styled from "styled-components";
import MovieSummary from "../MovieSummary";

const Container = styled.div`
  padding: 20px 10px;
`;

const CountLable = styled.p`
  font-weight: 300;
  font-size: 0.75rem;
  line-height: 1.3;
  text-transform: none;
  margin: 0px;
`;

const LabelContainer = styled.div`
  width: 100%;
  text-align: right;
`;

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const mapToMovieComponent = movie => (
  <MovieSummary key={movie.id} movie={movie} />
);

const MovieList = ({ movies = [], total = 0 }) => {
  return (
    <Container>
      <LabelContainer>
        <CountLable>{`Showing ${movies.length} of ${total}`}</CountLable>
      </LabelContainer>
      <ListContainer>{movies.map(mapToMovieComponent)}</ListContainer>
    </Container>
  );
};

export default MovieList;
