import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router";
import styled from "styled-components";
import Title from "../../components/Title";
import Button from "../../components/Button";

const Container = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 20px;
`;
const Img = styled.img`
  max-width: 100%;
`;

const Overview = styled.p`
  text-align: justify;
  max-width: 500px;
`;

const PosterContainer = styled.section`
  display: flex;
  margin: 30px 0px;
`;

const MovieInfo = styled.section`
  display: flex;
  flex-direction: column;
`;

const LabelContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const MovieDetail = () => {
  const history = useHistory();
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  const loadMovieDetails = () => {
    axios.get(`/api/movies/${id}`).then(({ data }) => setMovie(data));
  };

  useEffect(() => {
    loadMovieDetails();
  }, []);

  return (
    <Container>
      <Img src={movie.backdrop} />
      <Title>{movie.name}</Title>
      <MovieInfo>
        <Overview>{movie.overview}</Overview>
        <PosterContainer>
          <Img src={movie.poster} />
          <LabelContainer>
            <p>{movie.releaseDate}</p>
            <p>Genre: {movie.genre}</p>
          </LabelContainer>
        </PosterContainer>
      </MovieInfo>
      <Button large onClick={history.goBack}>
        Back
      </Button>
    </Container>
  );
};

export default MovieDetail;
