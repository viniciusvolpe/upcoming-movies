import React from "react";
import { cleanup, render, fireEvent } from "@testing-library/react";
import MovieSummary from "./MovieSummary";
import { Router } from "react-router";
import { createMemoryHistory } from "history";
afterEach(cleanup);

const defaultProps = {
  movie: {
    name: "",
  },
};

const setup = (props = defaultProps) => {
  return {
    props,
    render: render(
      <Router history={createMemoryHistory()}>
        <MovieSummary {...props} />
      </Router>
    ),
  };
};

describe("MovieSummary test suit", () => {
  it("Should render movie info", () => {
    const {
      render: { getByText },
    } = setup({
      movie: {
        name: "Bad boys",
        releaseDate: "January 01, 2020",
        genre: "Action",
      },
    });

    expect(getByText("Bad boys")).toBeTruthy();
    expect(getByText("January 01, 2020")).toBeTruthy();
    expect(getByText("Genre: Action")).toBeTruthy();
  });

  it("Should format movie name", () => {
    const {
      render: { getByText },
    } = setup({
      movie: {
        name:
          "A really long movie title that should be formatted to a better ui presentation",
      },
    });

    expect(getByText("A really long movie title that...")).toBeTruthy();
  });
});
