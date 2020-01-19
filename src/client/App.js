import React, { useEffect, useReducer } from "react";
import axios from "axios";
import "./app.css";
import Header from "./components/Header";
import FilterInput from "./components/FilterInput";

const initialState = {
  movies: [],
  page: null,
};

const ACTIONS = {
  SUMMARY: "summary",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SUMMARY:
      return {
        ...state,
        ...action.payload,
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
      .then(({ data }) => {
        console.log("data", data);
        dispatch({ payload: data, type: ACTIONS.SUMMARY });
      });
  }, []);
  return (
    <>
      <Header />
      <FilterInput />
    </>
  );
}

export default App;
