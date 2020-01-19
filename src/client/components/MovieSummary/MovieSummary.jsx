import React from "react";
import styled from "styled-components";
import Card from "../Card";

const Img = styled.img`
  border-radius: 4px 0px 0px 4px;
  margin-right: 20px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  font-weight: bold;
  font-size: xx-large;
  line-height: 35px;
`;

const Subtitle = styled.p`
  font-weight: normal;
  font-size: large;
`;

const formatName = name =>
  name.length <= 30 ? name : `${name.substring(0, 30)}...`;

const MovieSummary = ({ movie }) => {
  return (
    <Card>
      <Img src={movie.poster} />
      <InfoContainer>
        <Title>
          {formatName(movie.name)}
          <Subtitle>{movie.releaseDate}</Subtitle>
        </Title>
        <p>Genre: {movie.genre}</p>
      </InfoContainer>
    </Card>
  );
};

export default MovieSummary;
