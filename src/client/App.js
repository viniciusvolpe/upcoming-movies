import React, { useEffect, useReducer } from "react";
import axios from "axios";
import "./app.css";
import Header from "./components/Header";
import FilterInput from "./components/FilterInput";
import MovieList from "./components/MovieList";
import LoadMore from "./components/LoadMore";

const initialState = {
  movies: [],
  page: null,
  total: 0,
  pageCount: 0,
};

const ACTIONS = {
  SUMMARY: "summary",
  LOAD_MORE: "loadMore",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SUMMARY:
      const {
        results: movies,
        page,
        total_results: total,
        total_pages: pageCount,
      } = action.payload;
      return {
        ...state,
        movies,
        page,
        total,
        pageCount,
      };
    case ACTIONS.LOAD_MORE:
      return {
        ...state,
        movies: [...state.movies, ...action.payload.results],
        page: action.payload.page,
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const loadMovies = (page, type = ACTIONS.SUMMARY) => {
    axios
      .get("/api/movies", {
        params: { page },
      })
      .then(({ data }) => dispatch({ payload: data, type }));
  };

  const loadMore = () => {
    loadMovies(state.page + 1, ACTIONS.LOAD_MORE);
  };

  useEffect(() => {
    loadMovies();
  }, []);

  return (
    <>
      <Header />
      <FilterInput />
      <MovieList movies={state.movies} total={state.total} />
      {state.page < state.pageCount && <LoadMore loadMore={loadMore} />}
    </>
  );
}

export default App;
