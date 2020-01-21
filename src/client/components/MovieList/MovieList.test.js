import React from "react";
import { cleanup, render, fireEvent } from "@testing-library/react";
import MovieList from "./MovieList";
import { Router } from "react-router";
import { createMemoryHistory } from "history";

afterEach(cleanup);

const defaultProps = {
  movies: [],
  total: 0,
};

const setup = (props = defaultProps) => {
  return {
    props,
    render: render(
      <Router history={createMemoryHistory()}>
        <MovieList {...props} />
      </Router>
    ),
  };
};

describe("MovieList test suit", () => {
  it("Should render list header", () => {
    const {
      render: { getByText },
    } = setup({ movies: [{ name: "", id: 1 }], total: 2 });

    expect(getByText("Showing 1 of 2")).toBeTruthy();
  });
});
