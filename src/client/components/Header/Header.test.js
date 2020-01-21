import React from "react";
import { cleanup, render } from "@testing-library/react";
import Header from "./Header";

afterEach(cleanup);

const defaultProps = {};

const setup = (props = defaultProps) => {
  return {
    props,
    render: render(<Header {...props} />),
  };
};

describe("Header test suit", () => {
  it("Should render main title", () => {
    const {
      render: { getByText },
    } = setup();

    expect(getByText("Upcoming movies")).toBeTruthy();
  });

  it("Should render subtitle", () => {
    const {
      render: { getByText },
    } = setup();

    expect(getByText("See what's coming in the world of cinema")).toBeTruthy();
  });
});
