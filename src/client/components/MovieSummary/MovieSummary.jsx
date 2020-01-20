import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Card from "../Card";
import Button from "../Button";

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

const handleImageError = event => {
  const defaultImage = "/public/default_movie_image.png";
  event.target.onerror = null;
  if (event.target.src != defaultImage) event.target.src = defaultImage;
};

const MovieSummary = ({ movie }) => {
  const history = useHistory();

  const goToDetails = () => {
    history.push("/movie");
  };

  return (
    <Card>
      <Img src={movie.poster} onError={handleImageError} />
      <InfoContainer>
        <Title>
          {formatName(movie.name)}
          <Subtitle>{movie.releaseDate}</Subtitle>
        </Title>
        <p>Genre: {movie.genre}</p>
        <Button primary onClick={goToDetails}>
          See details
        </Button>
      </InfoContainer>
    </Card>
  );
};

export default MovieSummary;
