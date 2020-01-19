import React, { useEffect, useReducer } from "react";
import axios from "axios";
import "./app.css";
import Header from "./components/Header";
import FilterInput from "./components/FilterInput";
import MovieList from "./components/MovieList";

const initialState = {
  movies: [],
  page: null,
  total: 0,
  pageCount: 0,
};

const ACTIONS = {
  SUMMARY: "summary",
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
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("/api/movies", {
        params: { page: state.page },
      })
      .then(({ data }) => dispatch({ payload: data, type: ACTIONS.SUMMARY }));
  }, []);

  return (
    <>
      <Header />
      <FilterInput />
      {console.log(state)}
      <MovieList movies={state.movies} total={state.total} />
    </>
  );
}

export default App;
