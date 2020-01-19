import React, { useEffect, useReducer } from "react";
import axios from "axios";
import "./app.css";
import Header from "./components/Header";
import FilterInput from "./components/FilterInput";
import MovieList from "./components/MovieList";
import LoadMore from "./components/LoadMore";
import FilterLabel from "./components/FilterLabel";

const initialState = {
  movies: [],
  page: null,
  total: 0,
  pageCount: 0,
  query: "",
};

const ACTIONS = {
  SUMMARY: "summary",
  LOAD_MORE: "loadMore",
  SEARCH: "search",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SUMMARY:
      const {
        results: movies,
        page,
        total_results: total,
        total_pages: pageCount,
        query,
      } = action.payload;
      return {
        ...state,
        movies,
        page,
        total,
        pageCount,
        query,
      };
    case ACTIONS.LOAD_MORE:
      return {
        ...state,
        movies: [...state.movies, ...action.payload.results],
        page: action.payload.page,
      };
    case ACTIONS.SEARCH:
      return {
        ...state,
        movies: action.payload.results,
        page: action.payload.page,
        total: action.payload.total_results,
        pageCount: action.payload.total_pages,
        query: action.payload.query,
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const loadMovies = ({ page, type = ACTIONS.SUMMARY, query } = {}) => {
    axios
      .get(`/api/movies${query ? "/search" : ""}`, {
        params: { page, query },
      })
      .then(({ data }) => dispatch({ payload: { ...data, query }, type }));
  };

  const loadMore = () => {
    loadMovies({
      page: state.page + 1,
      query: state.query,
      type: ACTIONS.LOAD_MORE,
    });
  };

  const searchMovies = query => {
    loadMovies({ query, type: ACTIONS.SEARCH });
  };

  useEffect(() => {
    loadMovies();
  }, []);

  return (
    <>
      <Header />
      <FilterInput onChange={searchMovies} />
      {state.query && <FilterLabel reset={loadMovies} query={state.query} />}
      <MovieList
        movies={state.movies}
        total={state.total}
        query={state.query}
        resetFilter={loadMovies}
      />
      {state.page < state.pageCount && <LoadMore loadMore={loadMore} />}
    </>
  );
}

export default App;
