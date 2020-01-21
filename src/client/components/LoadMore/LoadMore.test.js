import React from "react";
import { createMemoryHistory } from "history";
import { cleanup, render, fireEvent } from "@testing-library/react";
import LoadMore from "./LoadMore";
import { Router } from "react-router";

afterEach(cleanup);

const defaultProps = {
  loadMore: jest.fn(),
};

const setup = (props = defaultProps) => {
  return {
    props,
    render: render(
      <Router history={createMemoryHistory()}>
        <LoadMore {...props} />
      </Router>
    ),
  };
};

describe("LoadMore test suit", () => {
  it("Should render load more button", () => {
    const {
      render: { getByText },
    } = setup();

    expect(getByText("See more")).toBeTruthy();
  });

  it("Should call loadMore function", () => {
    const {
      props: { loadMore },
      render: { getByText },
    } = setup();

    const button = getByText("See more");
    fireEvent.click(button);
    expect(loadMore).toHaveBeenCalled();
  });
});
