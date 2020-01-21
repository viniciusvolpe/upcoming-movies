import React from "react";
import { cleanup, render, fireEvent } from "@testing-library/react";
import FilterLabel from "./FilterLabel";

afterEach(cleanup);

const defaultProps = {
  query: "",
};

const setup = (props = defaultProps) => {
  return {
    props,
    render: render(<FilterLabel {...props} />),
  };
};

describe("FilterLabel test suit", () => {
  it("Should render back link", () => {
    const {
      render: { getByText },
    } = setup();

    expect(getByText("Movies")).toBeTruthy();
  });

  it("Should render the query word used", () => {
    const {
      render: { getByText },
    } = setup({ query: "bad" });
    expect(getByText("bad", { exact: false })).toBeTruthy();
  });
});
